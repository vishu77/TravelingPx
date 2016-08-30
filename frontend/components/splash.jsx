const React = require('react');
import { Link, browserHistory } from 'react-router';
const PhotoIndex = require('./photo/index');
const HomeFeed = require('./photo/homefeed');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session');

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

  handleGuestLogin (e) {
    e.preventDefault();
    SessionActions.login({username: "lazypanda", password: "eatallday"});
  },

  render () {
    let main = (
      <div className="splash">
        <div className="splash-text">
          <h1>Gateway to an Amazing Adventure</h1>
          <h2>Showcase your travels and Inspire others to go on an Adventure</h2>
          <Link to='/signup' className="splash-button">Get Started</Link>
          <button className="guest-button"
            onClick={this.handleGuestLogin}>Guest Login
          </button>
        </div>

        <div className="splash-footer">
          <ul>
            <li><h3>Photo by</h3></li>
            <li>Chris Lu</li>
          </ul>
        </div>
      </div>
    );
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div>
          <HomeFeed currentUser={ this.state.currentUser } />
        </div>
      );
    } else {
      return (
        <main className="splash-page">
          { main }
          <PhotoIndex />
        </main>
      );
    }
  }
});

module.exports = Splash;
