const React = require('react');
const NavBar = require('./nav/navbar');

const App = React.createClass({
  render () {
    let location = this.props.location;
    return (
      <div>
        <header>
          <NavBar pathname={location.pathname}/>
        </header>
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
