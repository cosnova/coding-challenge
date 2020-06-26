import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { fetchProducts, fetchBrands } from '../redux/products/actions';

// Master Page
import Header from '../components/_masterPage/Header';
import Footer from '../components/_masterPage/Footer';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  brandWrapper: {
    margin: theme.spacing(2),
    position: 'relative'
  },
  brandProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

const Products = (props) => {
  const classes = useStyles();

  const [brand, setBrand] = useState(props.products.brandFilter);
  const [productName, setProductName] = useState(props.products.nameFilter);

  //running only on the load
  useEffect(() => {
    props.dispatch(fetchBrands());
  }, []);

  //function to be watching brand and product name
  useEffect(() => {
    props.dispatch(fetchProducts(brand));
  }, [productName, brand]);

  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleChangeProduct = (event) => {
    setProductName(event.target.value);
  };

  const ProductsGrid = () => {
    if (props.products.loading) {
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Grid>
      );
    } else if (props.products.list && props.products.list.length > 0) {
      return props.products.list.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={product.image_link}
              title={product.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {product.brand}
              </Typography>
              <Typography>{product.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Typography gutterBottom variant="h3" component="h2">
                <small>{product.price_sign}</small>
                {product.price}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ));
    } else {
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h5" color="textSecondary">
            No products to be displayed
          </Typography>
        </Grid>
      );
    }
  };

  const SelectBrand = () => {
    return (
      <div className={classes.brandWrapper}>
        <Select onChange={handleChangeBrand} value={brand} disabled={props.products.brandIsLoading}>
          {props.products.brandList.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        {props.products.brandIsLoading && (
          <CircularProgress size={24} className={classes.brandProgress} />
        )}
      </div>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Product List {props.products.list.length}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This a sample of a product list comming from API
            </Typography>
            <div className={classes.filters}>
              <Grid container spacing={2} justify="center" align="center">
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Product name"
                    value={productName}
                    onChange={handleChangeProduct}
                  />
                </Grid>
                <Grid item>
                  <SelectBrand />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <ProductsGrid products={props.products.list} />
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return state;
}

// export default Todo;
export default connect(mapStateToProps)(Products);
