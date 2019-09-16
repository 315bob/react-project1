import * as actionType from "./actionType";
import axios from "axios";

export const login = (username, password) => {
  return dispatch => {
    dispatch({ type: actionType.LOGIN });
    const user = {
      username: username,
      password: password
    };

    let url = "api/auth/signin";

    axios
      .post(url, user)
      .then(response => {
        if (response.status == 200) {
          let token = response.data.tokenType + " " + response.data.accessToken;
          localStorage.setItem("token", token);
          dispatch({ type: actionType.LOGIN_SUCCEED, token });
        }
      })
      .catch(() => {
        dispatch({
          type: actionType.LOGIN_FAILED
        });
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return dispatch => {
    dispatch({ type: actionType.LOGOUT });
  };
};

export const autoLogin = () => {
  return dispatch => {
    dispatch({
      type: actionType.AUTO_LOGIN
    });
  };
};
