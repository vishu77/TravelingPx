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
    this.props.close();
    this.setState({title: "", description: "", image_url: ""});
  },

  updateProps (property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  render () {
    return (
      <div className="form-box group">
        <div className="image-box">
          <img className="upload-photo" src={this.props.image_url} />
        </div>

        <form onSubmit={this.handleSubmit} className="inputs-box">
          <div className="publish-button-box">
            <button className="submit-button">Publish photo</button>
          </div>

          <div className="input-components">
            <div>
              <label>
                <h4>Title</h4>
                <div>
                  <input type="text" className="form-inputs"
                    value={this.state.title}
                    onChange={this.updateProps("title")} />
                </div>
            </label>
            </div>

            <div>
              <label>
              <h4>Description</h4>
                <div>
                  <textarea className="form-inputs"
                    value={this.state.description}
                    onChange={this.updateProps("description")} />
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = PhotoForm;
