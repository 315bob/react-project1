import * as actionType from "./actions";

const initialState = {
  auth: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      const loginData = {
        username: action.loginData.username,
        password: action.loginData.password
      };
      return {
        ...state,
        auth: true
      };
  }
  return state;
};

export default reducer;
