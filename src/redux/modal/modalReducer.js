import { OPENMODAL, CLOSEMODAL } from "../actionTypes";
const initialState = false;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPENMODAL:
      return action.payload;
    case CLOSEMODAL:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
