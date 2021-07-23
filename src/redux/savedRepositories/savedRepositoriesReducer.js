import {
  ADDSAVEDREPOSITORIESLIST,
  DELETESAVEDREPOSITORIESLIST,
} from "../actionTypes";
const initialState =
  localStorage.getItem("selectedRepos") !== null
    ? JSON.parse(localStorage.getItem("selectedRepos"))
    : {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDSAVEDREPOSITORIESLIST:
      if (typeof state[action.payload.id] === "undefined") {
        state[action.payload.id] = action.payload.full_name;
        localStorage.setItem("selectedRepos", JSON.stringify(state));
      }
      return state;
    case DELETESAVEDREPOSITORIESLIST:
      const checkDeletion = delete state[action.payload.id];
      if (checkDeletion)
        localStorage.setItem("selectedRepos", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
