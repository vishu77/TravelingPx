const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const App = require('./components/app');
const LoginForm = require('./components/user/login_form');
const SessionActions = require('./actions/session_actions');
const Splash = require('./components/splash');

const pageRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={LoginForm} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);

  if(window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(pageRouter, root);
});
