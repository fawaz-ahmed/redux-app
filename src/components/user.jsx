import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class User extends Component {

  showDetails() {
    // console.log('show details');
  }

  render() {
    const { user, color } = this.props;

    const itemStyle = {
      borderRadius: 10,
      padding: 10,
      color: 'white',
      textAlign: 'left',
      background: color,
      width: '100%',
      height: '100%'
    };

    const imgStyle = {
      marginRight: 10,
      borderRadius: '20%'
    };

    return (
      <div key={`user-${user.id}`} style={itemStyle}>
        <div style={{ cursor: 'pointer' }} onClick={this.showDetails}>
          <img
            alt={`${user.login} profile`}
            src={user.avatar_url}
            width={'20%'}
            className="img-fluid"
            style={imgStyle}
          />
          <label>
            <strong>{user.login}</strong>
          </label>
        </div>
        <div style={{ textAlign: 'right', marginTop: 20 }}>
          <a href={user.html_url} target="blank">
            <Button color="warning" size="sm" style={{ cursor: 'pointer' }}>view profile</Button>
          </a>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object,
  color: PropTypes.string,
};

export default User;
