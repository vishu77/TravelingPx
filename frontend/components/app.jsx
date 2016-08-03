const React = require('react');
const NavBar = require('./navbar');
const ErrorStore = require('../stores/error');

const App = React.createClass({
  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount () {
    this.errorListener.remove();
  },

  errors() {
    const errors = ErrorStore.errors(this.props.location.pathname.slice(1));
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  render () {
    let location = this.props.location;

    return (
      <div>
        <NavBar pathname={location.pathname}/>
        {this.errors()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
