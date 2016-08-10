const React = require('react');
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo');
const HomeFeedItem = require('./homefeed_item');

const HomeFeed = React.createClass({
  getInitialState () {
    return { photos: [] };
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
    return (
      <main className="homepage">
        <section className="homefeed">
          <ul className="homefeed-list">
            { this.homefeed() }
          </ul>
        </section>

        <aside className="user-dashboard">

        </aside>

      </main>
    );
  }
});

module.exports = HomeFeed;
