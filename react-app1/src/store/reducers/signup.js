import * as actionType from "../actions/actionType";

const initial = {
  success: false,
  error: false,
  loading: false
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionType.SIGNUP:
      return {
        loading: true
      };
    case actionType.SIGNUP_SUCCEED:
      return {
        ...state,
        loading: false,
        success: true
      };

    case actionType.SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
