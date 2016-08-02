const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const App = require('./components/app');
const LoginForm = require('./components/user/login_form');

const pageRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={LoginForm} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(pageRouter, root);
});
