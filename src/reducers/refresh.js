const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_REFRESH': {
      return action.data;
    }
    default:
      return state;
  }
}
