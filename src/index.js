import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  ProdigiAdminRouter,
  Dashboard,
  Merchants
} from './components';

ReactDOM.render((
  <BrowserRouter>
    <Route path = "/" component = {ProdigiAdminRouter} />
    <Route path = "/home" component = {Dashboard} />
    <Route path = "/merchant" component = {Merchants} />
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
