import { SETSELECTEDREPO } from "../actionTypes";
const initialState = null;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETSELECTEDREPO:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
