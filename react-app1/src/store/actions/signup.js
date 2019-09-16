import * as actionType from "./actionType";
import axios from "axios";

export const signup = (username, email, name, password) => {
  return dispatch => {
    dispatch({ type: actionType.SIGNUP });
    const userInf = {
      username: username,
      email: email,
      name: name,
      password: password,
      role: ["admin"]
    };
    let url = "api/auth/signup";

    axios
      .post(url, userInf)
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: actionType.SIGNUP_SUCCEED });
        }
      })
      .catch(() => {
        dispatch({ type: actionType.SIGNUP_FAILED });
      });
  };
};
