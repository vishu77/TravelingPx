const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = require('./components/app');
const LoginForm = require('./components/user/login_form');
const SetupApp = require('./setup_app');
const PhotoIndex = require('./components/photo/index');

const pageRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoIndex} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={LoginForm} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  SetupApp();
  const root = document.getElementById('content');
  ReactDOM.render(pageRouter, root);
});
