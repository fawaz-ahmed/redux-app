import usersActions from '../actions/users';

const initialState = {
  users: [],
  filteredUsers: [],
  isLoaded: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case usersActions.LOAD_USERS:
      return {
        ...state,
        users: action.users,
        filteredUsers: action.users,
        isLoaded: true
      };

    case usersActions.SEARCH:
      return {
        ...state,
        filteredUsers: state.users.filter(user =>
          user.login.toLowerCase().indexOf(action.searchText) !== -1
        )
      };

    default:
      return state;
  }
}

export default users;
