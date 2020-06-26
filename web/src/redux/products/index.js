import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_STARTED
} from './actionTypes';

const initialState = {
  list: [],
  brandList: ['almay'],
  nameFilter: '',
  brandFilter: 'almay', // fixed first brand
  loading: false,
  brandIsLoading: false,
  error: null
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
    default:
      return state;
  }
}
