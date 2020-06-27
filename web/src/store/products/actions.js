import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_STARTED,
  SELECT_PRODUCT,
  FILTER_BRAND,
  FILTER_PRODUCT,
} from "./actionTypes";
import { axiosInstance } from "../axiosInstance";

export const fetchProducts = (brandFilter = "", queryName = "") => {
  return (dispatch) => {
    dispatch(fetchProductsStarted());

    axiosInstance
      .get(`/products.json`, {
        params: {
          brand: brandFilter,
        },
      })
      .then((res) => {
        let products = res.data;
        if (queryName) {
          products = products.filter((p) =>
            p.name.toLowerCase().includes(queryName.toLowerCase())
          );
        }
        dispatch(fetchProductsSuccess(products));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchProductsFailed(err.message));
      });
  };
};

export const fetchProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchProductsStarted());

    axiosInstance
      .get(`/products/${id}.json`)
      .then((res) => {
        dispatch(selectProduct(res.data));
      })
      .catch((err) => {
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

export const selectProduct = (selected) => ({
  type: SELECT_PRODUCT,
  selected,
});

export const filterBrand = (brand) => ({
  type: FILTER_BRAND,
  brand,
});

export const filterProduct = (query) => ({
  type: FILTER_PRODUCT,
  query,
});

const fetchProductsStarted = () => {
  return {
    type: FETCH_PRODUCTS_STARTED,
    payload: {
      isLoading: true,
    },
  };
};

const fetchProductsSuccess = (list) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      list,
    },
  };
};

const fetchBrandsStarted = () => {
  return {
    type: FETCH_BRANDS_STARTED,
    payload: {
      brandIsLoading: true,
    },
  };
};

const fetchBrandsSuccess = (list) => {
  return {
    type: FETCH_BRANDS_SUCCESS,
    payload: {
      list,
    },
  };
};

const fetchProductsFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  };
};
