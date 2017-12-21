const usersActions = {
  LOAD_USERS: 'LOAD_USERS',
  SEARCH: 'SEARCH',
  loadUsers: () => {
    return (dispatch) => {
      fetch('https://api.github.com/users').then(response => {
        response.json().then(users => {
          setTimeout(() => {
            dispatch({
              type: usersActions.LOAD_USERS,
              users
            });
          }, 2000);
        });
      });
    };
  },
  onSearch: (searchText) => {
    return (dispatch) => {
       dispatch({
          type: usersActions.SEARCH,
          searchText
        });
    };
  },
};

export default usersActions;