import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_STARTED
} from './actionTypes';
import { axiosInstance } from '../axiosInstance';

export const fetchProducts = (brandFilter = '') => {
  return (dispatch) => {
    dispatch(fetchProductsStarted());

    axiosInstance
      .get(`/products.json`, {
        params: {
          brand: brandFilter
        }
      })
      .then((res) => {
        console.log(res.data);
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchProductsFailed(err.message));
      });
  };
};

export const fetchBrands = () => {
  return (dispatch) => {
    dispatch(fetchBrandsStarted());

    axiosInstance
      .get(`/products.json`)
      .then((res) => {
        const brands = [...new Set(res.data.map((item) => item.brand))];
        dispatch(fetchBrandsSuccess(brands.sort()));
      })
      .catch((err) => {
        dispatch(fetchProductsFailed(err.message));
      });
  };
};

const fetchProductsStarted = () => {
  return {
    type: FETCH_PRODUCTS_STARTED,
    payload: {
      isLoading: true
    }
  };
};

const fetchProductsSuccess = (list) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      list
    }
  };
};

const fetchBrandsStarted = () => {
  return {
    type: FETCH_BRANDS_STARTED,
    payload: {
      brandIsLoading: true
    }
  };
};

const fetchBrandsSuccess = (list) => {
  return {
    type: FETCH_BRANDS_SUCCESS,
    payload: {
      list
    }
  };
};

const fetchProductsFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
      error
    }
  };
};
