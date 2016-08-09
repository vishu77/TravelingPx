const React = require('react');
const PhotoActions = require('../../actions/photo_actions');

const PhotoForm = React.createClass({
  getInitialState () {
    if (this.props.formType === 'edit') {
      return { title: this.props.photo.title,
        description: this.props.photo.description,
        imageURL: this.props.photo.image_url };
    } else {
      return { title: "", description: "",
        imageFile: this.props.imageFile,
        imageURL: this.props.imageURL };
    }
  },

  _handleSubmit (e) {
    e.preventDefault();
    if (this.props.formType === 'edit') {
      let photo = {
          id: this.props.photoId,
          title: this.state.title,
          description: this.state.description };

      PhotoActions.updatePhoto(photo);
      this.props.close();

    } else {
      const formData = new FormData();

      formData.append("photo[title]", this.state.title);
      formData.append("photo[description]", this.state.description);
      formData.append("photo[image]", this.state.imageFile);

      PhotoActions.uploadPhoto(formData);
      this.props.close();
      this.setState({title: "", description: "",
        imageURL: "", imageFile: null });
    }
  },

  updateProps (property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  render () {
    let submitText = "Upload Photo";
    if (this.props.formType === 'edit') {
      submitText = "Edit Photo";
    }

    return (
      <div className="form-box group">
        <div className="image-box">
          <img className="upload-photo" src={this.state.imageURL} />
        </div>

        <form onSubmit={this._handleSubmit} className="inputs-box">
          <div className="publish-button-box">
            <button className="button submit-button">{submitText}</button>
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
