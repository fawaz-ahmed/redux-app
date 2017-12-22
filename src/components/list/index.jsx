import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import User from '../item';

const colors = ['dodgerblue', 'lightcoral', 'magenta', 'darkorange', 'deeppink', 'mediumseagreen'];

class UserList extends Component {

  render() {
    const { users, onUserSelected } = this.props;

    const colStyle = {
      marginBottom: 10,
    };

    return (
      <Row>
        {users.map(user=> (
           <Col key={`user-${user.id}`} style={colStyle} xs={12} sm={6} md={4} lg={3} xl={2}>
             <User
               user={user}
               color={colors[Math.floor(Math.random() * colors.length)]}
               onClick={onUserSelected}
             />
           </Col>
        ))}
      </Row>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array,
  onUserSelected: PropTypes.func,
};

export default UserList;
