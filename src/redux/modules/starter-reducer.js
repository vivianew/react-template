export const STARTER_ACTION = '@starterReducer/STARTER_ACTION';

const initialState = {
  starter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTER_ACTION: {
      return {
        ...initialState,
        starter: action.starter,
      }
    }

    default: return state;
  }
}

export default reducer;