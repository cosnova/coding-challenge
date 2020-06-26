import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { history } from './helpers';
import { publicRoutes } from './routes';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

const publicRouter = publicRoutes.map((route, index) => (
  <Route
    path={route.path}
    component={route.component}
    name={route.name}
    key={index}
    exact={route.exact}
  />
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{publicRouter}</Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
