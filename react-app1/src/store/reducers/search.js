import * as actionType from "../actions/actionType";

const initial = {
  categorys: null,
  succeed: false,
  category: null
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionType.GET_CATEGORYS:
      return {
        categorys: action.categorys
      };
    case actionType.SEARCH_SUCCEED:
      return {
        ...state,
        category: action.category,
        succeed: true
      };

    default:
      return state;
  }
};

export default reducer;
