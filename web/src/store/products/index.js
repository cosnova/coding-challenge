import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_STARTED,
  SELECT_PRODUCT,
  FILTER_PRODUCT,
  FILTER_BRAND,
  FILTER_MAX_PRICE,
  RESET_FILTERS
} from './actionTypes';

const initialState = {
  list: [],
  brandList: ['almay'],
  nameFilter: '',
  brandFilter: 'almay', // fixed first brand
  maxPriceFilter: '',
  loading: false,
  brandIsLoading: false,
  error: null,
  selected: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: action.payload.list
      };
    case FETCH_BRANDS_STARTED:
      return {
        ...state,
        brandIsLoading: true
      };
    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        brandIsLoading: false,
        error: null,
        brandList: action.payload.list
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        loading: false,
        selected: action.selected
      };
    case FILTER_PRODUCT:
      return {
        ...state,
        loading: false,
        nameFilter: action.query
      };
    case FILTER_BRAND:
      return {
        ...state,
        loading: false,
        brandFilter: action.brand
      };
    case FILTER_MAX_PRICE:
      return {
        ...state,
        loading: false,
        maxPriceFilter: action.maxPrice
      };
    case RESET_FILTERS:
      return {
        ...state,
        brandFilter: initialState.brandFilter,
        nameFilter: initialState.nameFilter,
        maxPriceFilter: initialState.maxPriceFilter
      };
    default:
      return state;
  }
}
