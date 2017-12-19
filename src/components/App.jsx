import React, { Component } from 'react';
import { connect } from 'react-redux';
import usersActions from '../actions/users';

const { loadUsers } = usersActions;

class App extends Component {

  componentWillMount() {
    this.props.loadUsers();
  }
  render() {
    const { users } = this.props;

    const parentStyle = {
      margin: 20,
    };

    const itemStyle = {
      cursor: 'pointer',
      borderRadius: 10,
      padding: 10,
      border: '2px solid lightgrey',
      marginBottom: 5,
      color: 'darkgrey',
    };

    return (
      <div className="App" style={parentStyle}>
        {users.map(user=> (
          <div key={`user-${user.id}`} style={itemStyle}>
            {user.login}<br />
          </div>
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
