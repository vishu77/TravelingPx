const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = require('./components/app');
const LoginForm = require('./components/user/login_form');
const SessionApilUtil = require('./utils/session_api_util');
const SessionActions = require('./actions/session_actions');

window.SessionApilUtil = SessionApilUtil;

const pageRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={LoginForm} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(pageRouter, root);
});
