const React = require('react');
import { Link } from 'react-router';
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo');
const HomeFeedItem = require('./homefeed_item');
const SessionStore = require('../../stores/session');
const FollowIndex = require('../user/follow_index');

const HomeFeed = React.createClass({
  getInitialState () {
    return { photos: [], currentUser: SessionStore.currentUser() };
  },

  _onChange () {
    this.setState({ photos: PhotoStore.homefeed() });
  },

  componentDidMount () {
    this.homeListener = PhotoStore.addListener(this._onChange);
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
    let currentUser = this.state.currentUser;
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

          <ul className="group">
            <li>
              <Link to={'/' + currentUser.username }>
                <h4>{ currentUser.photos.length + " PHOTOS"}</h4>
              </Link>
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
