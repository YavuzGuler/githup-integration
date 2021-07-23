import {
  DELETEITEMFROMREPOSITORYLIST,
  SETREPOSITORYLIST,
} from "../actionTypes";
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETREPOSITORYLIST:
      return action.payload;
    case DELETEITEMFROMREPOSITORYLIST:
      state = state.filter((value) => value.id !== action.payload.id);
      return state;
    default:
      return state;
  }
};
export default reducer;
