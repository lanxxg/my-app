const initialState  = {
  list: [],
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'updateState':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export {
  userReducer,
}
