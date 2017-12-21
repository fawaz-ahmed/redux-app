const usersActions = {
  LOAD_USERS: 'LOAD_USERS',
  loadUsers: () => {
    return (dispatch) => {
      return fetch('https://api.github.com/users').then(response => {
        setTimeout(() => {
          dispatch({
            type: usersActions.LOAD_USERS,
            users: response.json()
          });
        }, 3000);
      });
    };
  },
};

export default usersActions;