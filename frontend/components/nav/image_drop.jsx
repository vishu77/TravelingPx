const React = require('react');
const Dropzone = require('react-dropzone');

const ImageDrop = React.createClass({
  getInitialState () {
    return { photo: "" };
  },

  _handleClick () {

  },

  onDrop (photo) {
    console.log('Received files: ', photo);
  },

  render () {
    return (
      <div>
        <Dropzone className="dropzone" ref="dropzone" onDrop={this.onDrop}>
          <button>Browse Photos</button>
          <div>Or drag & drop photos anywhere on this page</div>
        </Dropzone>
      </div>
    );
  }
});

module.exports = ImageDrop;
