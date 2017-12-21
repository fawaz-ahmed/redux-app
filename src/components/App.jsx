import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import usersActions from '../actions/users';
import User from './user';

const { loadUsers } = usersActions;

const colors = ['dodgerblue', 'lightcoral', 'magenta', 'darkorange', 'deeppink'];

class App extends Component {

  componentWillMount() {
    this.props.loadUsers();
  }
  render() {
    const { users, isLoaded } = this.props;

    const style = {
      padding: '10px 2%',
      textAlign: 'center'
    };

    return (
      <div style={style}>
        {!isLoaded && (
          <div style={{ margin: 'calc(50% - 50px)' }}>
            <BounceLoader
              color={'#36D7B7'}
              loading={true}
              size={100}
            />
          </div>
        )}
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
