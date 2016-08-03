const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = require('./components/app');
const LoginForm = require('./components/user/login_form');
const SessionActions = require('./actions/session_actions');
const SetupApp = require('./setup_app');

const pageRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={LoginForm} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  SetupApp();
  const root = document.getElementById('content');
  ReactDOM.render(pageRouter, root);
});
