const React = require('react');
const Modal = require('react-modal');
const FollowIndexItem = require('./follow_index_item');
const FollowStyle = require('./follow_style');

const FollowIndex = React.createClass({
  getInitialState () {
    return { modalOpen: false };
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  onModalClose () {
    this.setState({ modalOpen: false });
    FollowStyle.content.opacity = 0;
  },

  onModalOpen () {
    FollowStyle.content.opacity = 100;
  },

  render () {
    let follow = this.props.follows;

    let followList = follow.map((follow, idx) => {
      return <FollowIndexItem
          close={this.onModalClose}
          follow={follow} key={idx}/>;
    });

    return (

      <div>
        <button
          onClick={ this._handleClick }>
          { follow.length + " " + this.props.text}
        </button>

        <Modal
          isOpen={ this.state.modalOpen }
          onAfterOpen={ this.onModalOpen }
          onRequestClose={ this.onModalClose }
          style={ FollowStyle }>

          <div className="follow-list-box">
            <h2>{ this.props.text + " " + follow.length }</h2>
            <ul className="follow-list">
              { followList }
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
});

module.exports = FollowIndex;
