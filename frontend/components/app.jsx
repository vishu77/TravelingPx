const React = require('react');
const ErrorStore = require('../stores/error');
const ErrorActions = require('../actions/error_actions');
const NavBar = require('./nav/navbar');

const App = React.createClass({
  getInitialState () {
    return { errors: [] };
  },

  _handleErrors () {
    const form = this.props.location.pathname.slice(1);
    this.setState({ errors: ErrorStore.errors(form) });
  },

  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this._handleErrors);
  },

  componentWillUnmount () {
    this.errorListener.remove();
  },

  errors() {
    const errors = this.state.errors;
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  render () {
    let location = this.props.location;

    return (
      <div>
        <header>
          <NavBar pathname={location.pathname}/>
        </header>
        {this.errors()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
