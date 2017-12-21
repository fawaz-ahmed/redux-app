const usersActions = {
  LOAD_USERS: 'LOAD_USERS',
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
};

export default usersActions;