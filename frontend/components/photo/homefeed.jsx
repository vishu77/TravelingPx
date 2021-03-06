const React = require('react');
import { Link, browserHistory } from 'react-router';
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo');
const HomeFeedItem = require('./homefeed_item');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session');
const FollowIndex = require('../user/follow_index');

const HomeFeed = React.createClass({
  getInitialState () {
    return { photos: [], currentUser: SessionStore.currentUser() };
  },

  _onHomeChange () {
    this.setState({ photos: PhotoStore.homefeed() });
  },

  _dashboardPhotos (e) {
    e.preventDefault();
    browserHistory.push(`/${this.state.currentUser.username}`)
  },

  componentDidMount () {
    this.homeListener = PhotoStore.addListener(this._onHomeChange);
    PhotoActions.fetchAllPhotos();
    SessionActions.fetchCurrentUser(this.props.currentUser);
  },

  componentWillReceiveProps(newProps) {
    PhotoActions.fetchHomeFeed();
  },

  componentWillUnmount () {
    this.homeListener.remove();
  },

  homefeed () {
    return this.state.photos.map((photo) => {
      return <HomeFeedItem photo={photo} key={photo.id} />;
    });
  },

  render () {
    let currentUser = this.props.currentUser;
    let name = currentUser.username;

    if (currentUser.first_name) {
      name = `${currentUser.first_name} ${currentUser.last_name}`;
    }

    return (
      <main className="homepage">
        <section className="homefeed">
          <ul className="homefeed-list">
            { this.homefeed() }
          </ul>
        </section>

        <aside className="user-dashboard">
          <div>
            <Link to={'/' + currentUser.username }>
              <img className="thumbnail" src={ currentUser.avatar_url } />
            </Link>

            <Link to={'/' + currentUser.username }>
              <h3>{ name }</h3>
            </Link>
          </div>

          <ul>
            <li onClick={ this._dashboardPhotos }>
              <h4>{ currentUser.photos.length + " PHOTOS"}</h4>
            </li>

            <li>
              <h4>
                <FollowIndex follows={currentUser.followers}
                  text="Followers" />
              </h4>
            </li>
          </ul>
        </aside>
      </main>
    );
  }
});

module.exports = HomeFeed;
