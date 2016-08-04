const React = require('react');
const PhotoActions = require('../../actions/photo_actions');

const PhotoForm = React.createClass({
  getInitialState () {
    return { title: "", description: "", image_url: this.props.image_url };
  },

  handleSubmit (e) {
    e.preventDefault();

    let photo = {
      title: this.state.title,
      description: this.state.description,
      image_url: this.state.image_url
    };
    PhotoActions.uploadPhoto(photo);
  },

  updateProps (property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="image-box">
            <img className="upload-photo" width="100px" height="100px" src={this.state.image_url} />
            <input type="text" value={this.state.image_url} hidden />
          </div>

          <div className="inputs-box">
            <button>Publish Photo</button>

            <label>
              Title
              <input type="text"
                value={this.state.title}
                onChange={this.updateProps("title")} />
            </label>

            <label>
              Description
              <textarea
                value={this.state.description}
                onChange={this.updateProps("description")} />
            </label>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = PhotoForm;
