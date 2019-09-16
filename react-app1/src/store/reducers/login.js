import * as actionType from "../actions/actionType";

const initialState = {
  succeed: null,
  error: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return {
        ...state,
        loading: true
      };
    case actionType.LOGIN_SUCCEED:
      return {
        ...state,
        loading: false,
        succeed: action.token
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    case actionType.LOGOUT:
      return {
        ...state,
        succeed: null
      };
    case actionType.AUTO_LOGIN:
      return {
        ...state,
        succeed: localStorage.getItem("token")
      };

    default:
      return state;
  }
};

export default reducer;
