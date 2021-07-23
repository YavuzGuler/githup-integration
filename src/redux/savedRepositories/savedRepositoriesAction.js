import {
  ADDSAVEDREPOSITORIESLIST,
  DELETESAVEDREPOSITORIESLIST,
} from "../actionTypes";
export const addSavedRepoList = (savedRepo) => {
  return {
    type: ADDSAVEDREPOSITORIESLIST,
    payload: savedRepo,
  };
};
export const deleteSavedRepoList = (savedRepo) => {
  return {
    type: DELETESAVEDREPOSITORIESLIST,
    payload: savedRepo,
  };
};
