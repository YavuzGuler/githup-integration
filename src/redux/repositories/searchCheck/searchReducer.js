import {
  ADDSAVEDREPOSITORIESLIST,
  DELETESAVEDREPOSITORIESLIST,
  SEARCH,
} from "../../actionTypes";
const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
