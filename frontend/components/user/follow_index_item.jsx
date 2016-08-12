const React = require('react');
import { Link, browserHistory } from 'react-router';

const FollowIndexItem = React.createClass({
  _handleClick () {
    this.props.close();
    browserHistory.push(`/${this.props.follow.username}`);
  },

  render () {
    let follow = this.props.follow;

    return (
      <li className="follow-item">
        <button onClick={this._handleClick} >
          <img className="thumbnail" src={follow.avatar_url} />
        </button>

        <div>
          <button onClick={this._handleClick} >
            <h3>{follow.username}</h3>
            </button>
          <h4>{follow.followers + " followers"}</h4>
        </div>
    </li>
    );
  }
});

module.exports = FollowIndexItem;
