const usersActions = {
  LOAD_USERS: 'LOAD_USERS',
  SEARCH: 'SEARCH',
  USER_SELECTED: 'USER_SELECTED',
  CLOSE_MODAL: 'CLOSE_MODAL',
  LOAD_FOLLOWERS: 'LOAD_FOLLOWERS',
  loadUsers: () => {
    return (dispatch) => {
      fetch('https://api.github.com/users').then(response => {
        response.json().then(users => {
          dispatch({
            type: usersActions.LOAD_USERS,
            users
          });
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
  onUserSelected: (user) => {
    return (dispatch, getState) => {
      const { followers } = getState().users;

      dispatch({
        type: usersActions.USER_SELECTED,
        user
      });

      if(!followers[user.id]) {
        fetch(user.followers_url).then(response => {
          response.json().then(userFollowers => {
            dispatch({
              type: usersActions.LOAD_FOLLOWERS,
              user,
              userFollowers
            });
          });
        });
      }
    };
  },
  onModalClose: () => {
    return (dispatch) => {
       dispatch({
         type: usersActions.CLOSE_MODAL,
       });
    };
  },
};

export default usersActions;