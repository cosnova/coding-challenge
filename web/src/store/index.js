import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import products from './products';

export default createStore(combineReducers({ products }), compose(applyMiddleware(reduxThunk)));
