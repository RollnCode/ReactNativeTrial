const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return action.data;
    }
    default:
      return state;
  }
}
