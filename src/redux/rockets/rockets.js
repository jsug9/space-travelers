const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return action.payload;

    default:
      return state;
  }
};

export default rocketsReducer;
