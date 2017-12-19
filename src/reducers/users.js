const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return {...state, users: action.users};
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default users;
