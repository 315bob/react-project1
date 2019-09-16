import * as actionType from "./actionType";
import axios from "axios";

export const set = product => {
  return {
    type: actionType.SET_CURRENT_PRODUCT,
    product: product
  };
};
