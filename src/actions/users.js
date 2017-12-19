const usersActions = {
  LOAD_USERS: 'LOAD_USERS',
  TOGGLE_SORT: 'TOGGLE_SORT',
  TOGGLE_VIEW: 'TOGGLE_VIEW',
  toggleSort: () => {
    return (dispatch) => {
      dispatch({
        type: usersActions.TOGGLE_SORT
      });
    };
  },
  toggleView: () => {
    return (dispatch) => {
      dispatch({
        type: usersActions.TOGGLE_VIEW
      });
    };
  },
  loadUsers: () => {
    return (dispatch) => {
      return fetch('https://api.github.com/users').then(response => {
        response.json().then(users => {
          dispatch({
            type: usersActions.LOAD_USERS,
            users
          });
        });

      });
    };
  },
};

export default usersActions;