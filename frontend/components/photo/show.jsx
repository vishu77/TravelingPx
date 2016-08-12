const React = require('react');
const Modal = require('react-modal');
import { Link, browserHistory } from 'react-router';
const ModalStyle = require('../nav/modal_style');
const PhotoForm = require('./form');
const PhotoStore = require('../../stores/photo');
const PhotoActions = require('../../actions/photo_actions');
const SessionStore = require('../../stores/session');
const FollowButton = require('../user/follow_button');

const PhotoShow = React.createClass({
  getInitialState () {
    const photo = PhotoStore.find(parseInt(this.props.params.photoId));
    return { photo: photo, modalOpen: false };
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  _handleRemove () {
    PhotoActions.deletePhoto(parseInt(this.props.params.photoId));
    browserHistory.push('/');
  },

  componentDidMount () {
    this.photoListener = PhotoStore.addListener(this.handleChange);
    PhotoActions.fetchSinglePhoto(parseInt(this.props.params.photoId));
  },

  componentWillUnmount () {
    this.photoListener.remove();
  },

  handleChange() {
    const photo = PhotoStore.find(this.props.params.photoId);
    this.setState({ photo: photo ? photo : {} });
  },

  onModalClose () {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },

  onModalOpen () {
    ModalStyle.content.opacity = 100;
  },

  render () {
    let photoDetails = this.state.photo;

    if (photoDetails){
      let editButton = <div></div>;
      let deleteButton = <div></div>;
      let followers = <FollowButton poster_id={ this.state.photo.poster_id } />;
      let buttons;

      let currentUser = SessionStore.currentUser();
      if (currentUser && currentUser.id === photoDetails.poster_id) {
        editButton = (
          <button className="edit-image"
            onClick={ this._handleClick }>
            Edit Photo

            <Modal
              isOpen={ this.state.modalOpen }
              onAfterOpen={ this.onModalOpen }
              onRequestClose={ this.onModalClose }
              style={ModalStyle}>

              <PhotoForm formType={"edit"}
                photo={ this.state.photo }
                photoId= { parseInt(this.props.params.photoId) }
                close={ this.onModalClose } />
            </Modal>
          </button>
        );

        deleteButton = (
          <button className="delete-button"
            onClick={this._handleRemove}>
            Delete Photo
          </button>
        );

        buttons = (
          <div className="button-space">
            { editButton }
            { deleteButton }
          </div>
        );
      } else {
        followers = `${photoDetails.followers.length} followers`;
      }

      return (
        <main className="photo-details-box">
          <div className="image-show-box">
            <img className="photo-show" src={ photoDetails.image_url }/>
          </div>

          <div className="photo-details-show-box">
            <ul className="user-info">
              <li>
                <Link to={"/" + photoDetails.username}>
                  <img className="thumbnail" src={photoDetails.avatar_url} />
                </Link>
              </li>

              <li>
                <Link to={"/" + photoDetails.username}>
                  <h3>{ photoDetails.poster }</h3>
                </Link>

                <h4>{ followers }</h4>
              </li>
          </ul>

          { buttons }

          <div className="photo-text">
            <h3>{ photoDetails.title }</h3>
            <p>{ photoDetails.description }</p>
          </div>

          </div>
        </main>
      );
    } else {
      return(
        <div>
        </div>
      );
    }
  }
});

module.exports = PhotoShow;
