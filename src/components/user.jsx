import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

  render() {
    const { user, color } = this.props;

    const itemStyle = {
      cursor: 'pointer',
      borderRadius: 10,
      padding: 10,
      color: 'white',
      textAlign: 'left',
      background: color,
      width: '100%',
      height: '100%'
    };

    return (
      <div key={`user-${user.id}`} style={itemStyle}>
        {user.login}<br />
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object,
  color: PropTypes.string,
};

export default User;
