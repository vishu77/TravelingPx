const React = require('react');
const ErrorStore = require('../stores/error');
const NavBar = require('./nav/navbar');
const PhotoIndex = require('./photo/index');

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
