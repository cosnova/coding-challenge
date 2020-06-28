import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import {
  fetchProducts,
  fetchBrands,
  selectProduct,
  filterProduct,
  filterBrand,
  filterMaxPrice,
  resetFilters
} from '../store/products/actions';

// Master Page
import Header from '../components/_masterPage/Header';
import Footer from '../components/_masterPage/Footer';

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
    flexDirection: 'column',
    cursor: 'pointer'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  selectWrapper: {
    margin: theme.spacing(2),
    position: 'relative'
  },
  brandProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  reset: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Products = (props) => {
  const classes = useStyles();

  // const [brand] = useState(props.products.brandFilter);
  // const [productName] = useState(props.products.nameFilter);

  //running only on the load
  useEffect(() => {
    props.dispatch(fetchBrands());
  }, []);

  //function to be watching brand and product name
  useEffect(() => {
    props.dispatch(
      fetchProducts(
        props.products.brandFilter,
        props.products.nameFilter,
        props.products.maxPriceFilter
      )
    );
  }, [props.products.nameFilter, props.products.brandFilter, props.products.maxPriceFilter]);

  const handleChangeProduct = (event) => {
    props.dispatch(filterProduct(event.target.value));
  };

  const handleChangeBrand = (event) => {
    props.dispatch(filterBrand(event.target.value));
  };

  const handleChangeMaxPrice = (event) => {
    props.dispatch(filterMaxPrice(event.target.value));
  };

  const handleClickView = (product) => {
    props.dispatch(selectProduct(product));
    props.history.push(`/product/${product.brand}/${product.id}`);
  };

  const handleClickResetFilters = () => {
    props.dispatch(resetFilters());
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
          <Card className={classes.card} onClick={() => handleClickView(product)}>
            <CardMedia
              className={classes.cardMedia}
              image={product.image_link}
              title={product.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2">
                {product.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleClickView(product)}>
                View
              </Button>
              <Typography gutterBottom variant="h4" component="h3">
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
      <div className={classes.selectWrapper}>
        <Select
          onChange={handleChangeBrand}
          value={props.products.brandFilter}
          disabled={props.products.brandIsLoading}
          autoWidth
        >
          {props.products.brandList.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        {props.products.brandIsLoading && (
          <CircularProgress size={24} className={classes.brandProgress} />
        )}
        <FormHelperText>Brand</FormHelperText>
      </div>
    );
  };

  const SelectPrice = () => {
    const filterValues = [
      { val: 8, text: '$8' },
      { val: 15, text: '$15' },
      { val: 25, text: '$25' },
      { val: 35, text: '$35' }
    ];
    return (
      <div className={classes.selectWrapper}>
        <Select
          data-testid="maxPriceFilter"
          onChange={handleChangeMaxPrice}
          value={props.products.maxPriceFilter}
          disabled={props.products.loading}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {filterValues.map((item) => (
            <MenuItem value={item.val} key={item.val}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Max product price</FormHelperText>
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
          <Container maxWidth="lg">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Total of products {props.products.list.length}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This a sample of a product list comming from API
            </Typography>
            <div className={classes.filters}>
              <Grid container spacing={10} justify="center" align="center">
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Product name"
                    value={props.products.nameFilter}
                    onChange={handleChangeProduct}
                  />
                </Grid>
                <Grid item>
                  <SelectBrand />
                </Grid>
                <Grid item>
                  <SelectPrice />
                </Grid>
                <Grid item className={classes.reset}>
                  <Button color="primary" onClick={handleClickResetFilters}>
                    Reset filters
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
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
