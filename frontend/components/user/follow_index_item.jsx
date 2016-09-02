const React = require('react');
import { Link, browserHistory } from 'react-router';

const FollowIndexItem = React.createClass({
  _handleClick () {
    this.props.close();
    browserHistory.push(`/${this.props.follow.username}`);
  },

  render () {
    let follow = this.props.follow;
    let name = follow.username;
    if (follow.first_name) {
      name = `${follow.first_name} ${follow.last_name}`;
    }

    let followText = follow.followers === 1 ? "follower" : "followers";

    return (
      <li className="follow-item">
        <button onClick={this._handleClick} >
          <img className="thumbnail" src={follow.avatar_url} />
        </button>

        <div>
          <button onClick={this._handleClick} >
            <h3>{ name }</h3>
            </button>
          <h4>{follow.followers + " " + followText }</h4>
        </div>
    </li>
    );
  }
});

module.exports = FollowIndexItem;
