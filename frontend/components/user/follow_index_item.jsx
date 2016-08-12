const React = require('react');
import { Link, browserHistory } from 'react-router';

const FollowIndexItem = React.createClass({
  render () {
    let follow = this.props.follow;

    return (
      <li className="follow-item">
        <Link to={'/' + this.props.follow.username }>
          <img className="thumbnail" src={follow.avatar_url} />
        </Link>

        <div>
          <Link to={'/' + this.props.follow.username }>
            <h3>{follow.username}</h3>
          </Link>
          <h4>{follow.followers + " followers"}</h4>
        </div>
    </li>
    );
  }
});

module.exports = FollowIndexItem;
