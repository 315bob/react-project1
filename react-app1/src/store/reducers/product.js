import * as actionType from "../actions/actionType";
import { deflate } from "zlib";

const initial = {
  detail: null
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT_PRODUCT:
      return {
        ...state,
        detail: action.product
      };
    default:
      return state;
  }
};

export default reducer;
