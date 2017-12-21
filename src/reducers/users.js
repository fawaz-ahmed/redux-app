const initialState = {
  users: [],
  isLoaded: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return {
        ...state,
        users: action.users,
        isLoaded: true
      };
    default:
      return state;
  }
}

export default users;
