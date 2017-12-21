import React, { Component } from 'react';
import { connect } from 'react-redux';
import usersActions from '../actions/users';
import User from './user';

const { loadUsers } = usersActions;

const colors = ['dodgerblue', 'lightcoral', 'magenta', 'darkorange', 'deeppink'];

class App extends Component {

  componentWillMount() {
    this.props.loadUsers();
  }
  render() {
    const { users } = this.props;

    const style = {
      padding: '10px 2%',
      textAlign: 'center',
    };

    return (
      <div style={style}>
        {users.map(user=> (
          <User
            key={`user-${user.id}`}
            user={user}
            color={colors[Math.floor(Math.random() * colors.length)]}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {...state.users};
}

export default connect(mapStateToProps, {
  loadUsers
})(App);
