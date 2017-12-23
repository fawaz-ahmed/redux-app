import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import { Container } from 'reactstrap';
import usersActions from '../actions/users';
import UserList from './list';
import Search from './search';
import FollowersModal from './modal'

const { loadUsers, onSearch, onUserSelected, onModalClose } = usersActions;

class App extends Component {

  constructor() {
    super();
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentWillMount() {
    this.props.loadUsers();
  }

  onCloseModal() {
    this.props.onModalClose();
  }

  render() {
    const { filteredUsers, isLoaded, onSearch, onUserSelected,
      selectedUser, showModal, followers } = this.props;

    const style = {
      marginTop: 20,
    };

    if (!isLoaded) {
      return (
        <div style={{ margin: '10% calc(50% - 50px)' }}>
          <BounceLoader color={'turquoise'} loading size={100} />
        </div>
      );
    }

    return (
      <Container style={style}>
        <Search onSearch={onSearch} />
        <UserList users={filteredUsers} onUserSelected={onUserSelected} />
        <FollowersModal
          showModal={showModal}
          user={selectedUser}
          onClose={this.onCloseModal}
          followers={followers}
        />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {...state.users};
}

export default connect(mapStateToProps, {
  loadUsers,
  onSearch,
  onUserSelected,
  onModalClose
})(App);
