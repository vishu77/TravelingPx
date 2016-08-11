const React = require('react');
import { browserHistory } from 'react-router';
const PhotoIndex = require('./photo/index');
const HomeFeed = require('./photo/homefeed');
const SessionStore = require('../stores/session');
const NavBar = require('./nav/navbar');

const Splash = React.createClass({
  getInitialState () {
    return { currentUser: SessionStore.currentUser() };
  },

  _onChange () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  componentDidMount () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  handleClick (e) {
    e.preventDefault();
    browserHistory.push('/signup');
  },

  render () {
    let main;
    if (!SessionStore.isUserLoggedIn()) {
      main = (
        <div className="splash">
          <div className="splash-text">
            <h1>Gateway to an Amazing Adventure</h1>
            <h2>Showcase your Travels and Inspire Others to Travel</h2>
            <button className="splash-button" onClick={this.handleClick}>Get Started</button>
          </div>

          <div className="splash-footer">
            <ul>
              <li><h3>Photo by</h3></li>
              <li>Chris Lu</li>
            </ul>
          </div>
        </div>
      );

      return (
        <main className="splash-page">
          { main }
          <PhotoIndex />
        </main>
      );
    } else {
      return (
        <div>
          <HomeFeed currentUser={ this.state.currentUser } />
        </div>
      );
    }
  }
});

module.exports = Splash;
