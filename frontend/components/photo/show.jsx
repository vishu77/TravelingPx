const React = require('react');
const Modal = require('react-modal');
import { browserHistory } from 'react-router';
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

    if (this.state.photo){
      let editButton = <div></div>;
      let deleteButton = <div></div>;

      let currentUser = SessionStore.currentUser();
      if (currentUser && currentUser.id === photoDetails.poster_id) {
        editButton = (
          <div className="button-space">
            <button className="button form-button"
              onClick={ this._handleClick }>
              Edit Photo
            </button>

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
          </div>
        );

        deleteButton = (
          <div className="button-space">
            <button className="button form-button"
              onClick={this._handleRemove}>
              Delete Photo
            </button>
          </div>
        );
      }

      return (
        <div className="photo-details-box">
          <div className="image-show-box">
            <img className="photo-show" src={ photoDetails.image_url }/>
          </div>

          <div className="photo-details-show-box">
            <ul className="user-info">
              <li>{ photoDetails.poster }</li>
              <li><FollowButton poster_id={ this.state.photo.poster_id } /></li>
            </ul>

            <div className="photo-text">
              <h3>{ photoDetails.title }</h3>
              <p>{ photoDetails.description }</p>
            </div>

            {editButton}
            {deleteButton}
          </div>
        </div>
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
