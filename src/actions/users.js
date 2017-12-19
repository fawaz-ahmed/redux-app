const usersActions = {
  LOAD_USERS: 'LOAD_USERS',
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