import usersActions from '../actions/users';

const initialState = {
  users: [],
  filteredUsers: [],
  isLoaded: false,
  selectedUser: {},
  showModal: false,
  followers: {},
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

    case usersActions.USER_SELECTED:
      return {
        ...state,
        selectedUser: action.user,
        showModal: true,
      };

    case usersActions.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };

    case usersActions.LOAD_FOLLOWERS:
      const followers = Object.assign({}, {followers: state.followers});
      followers[action.user.id] = action.userFollowers;
      return {
        ...state,
        followers,
      };

    default:
      return state;
  }
}

export default users;
