import * as actionType from "./actionType";
import axios from "axios";

export const getCategorys = () => {
  return dispatch => {
    const request = { request: "get_all" };
    const url = "CategoryHandler";

    axios
      .post(url, request)
      .then(response => {
        console.log(response);
        dispatch({
          type: actionType.GET_CATEGORYS,
          categorys: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const search = category => {
  return dispatch => {
    dispatch({ type: actionType.SEARCH_SUCCEED, category: category });
  };
};
