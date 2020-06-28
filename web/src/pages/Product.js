import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Rating from '@material-ui/lab/Rating';

import { fetchProduct } from '../store/products/actions';

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
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

const Product = (props) => {
  const classes = useStyles();

  let { id, brand } = useParams();

  //running only on the load
  useEffect(() => {
    if (!props.products.selected || props.products.selected.id !== id) {
      props.dispatch(fetchProduct(id, brand));
    }
  }, [id]);

  const ProductCard = () => {
    if (props.products.loading || !props.products.selected) {
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Grid>
      );
    } else {
      return (
        <Grid container spacing={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={props.products.selected.image_link}
              title={props.products.selected.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.products.selected.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                Brand: {props.products.selected.brand}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                Category: {props.products.selected.category}
              </Typography>
              <Rating value={props.products.selected.rating} readOnly />
              <Typography>{props.products.selected.description}</Typography>
            </CardContent>
            <CardActions>
              <Typography gutterBottom variant="h3" component="h2">
                <small>{props.products.selected.price_sign}</small>
                {props.products.selected.price}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      );
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Product ID: {id}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This a sample of a product page loading from API
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/">
                Home
              </Link>
              <Link color="inherit" onClick={props.history.goBack} to="/">
                Previous page
              </Link>
              <Typography color="textPrimary">{props.products.selected.name}</Typography>
            </Breadcrumbs>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <ProductCard />
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
export default connect(mapStateToProps)(Product);
