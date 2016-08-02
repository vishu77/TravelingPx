const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const App = require('./components/app');

const pageRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(pageRouter, root);
});
