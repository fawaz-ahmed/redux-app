import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import { Container, Row, Col } from 'reactstrap';
import usersActions from '../actions/users';
import User from './user';
import Search from './search';

const { loadUsers, onSearch } = usersActions;

const colors = ['dodgerblue', 'lightcoral', 'magenta', 'darkorange', 'deeppink', 'mediumseagreen'];

class App extends Component {

  componentWillMount() {
    this.props.loadUsers();
  }
  render() {
    const { filteredUsers, isLoaded, onSearch } = this.props;

    const style = {
      marginTop: 20,
    };

    const colStyle = {
      marginBottom: 10,
    };

    if (!isLoaded) {
      return (
        <div style={{ margin: '10% calc(50% - 50px)' }}>
          <BounceLoader color={'orange'} loading size={100} />
        </div>
      );
    }

    return (
      <Container style={style}>
        <Search onSearch={onSearch} />
        <Row>
          {filteredUsers.map(user=> (
            <Col key={`user-${user.id}`} style={colStyle} xs={12} sm={6} md={4} lg={3} xl={2}>
              <User
                user={user}
                color={colors[Math.floor(Math.random() * colors.length)]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {...state.users};
}

export default connect(mapStateToProps, {
  loadUsers,
  onSearch
})(App);
