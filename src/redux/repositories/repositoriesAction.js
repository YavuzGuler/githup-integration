import {
  DELETEITEMFROMREPOSITORYLIST,
  SETREPOSITORYLIST,
} from "../actionTypes";
export const setRepositoryList = (repositoryList) => {
  return {
    type: SETREPOSITORYLIST,
    payload: repositoryList,
  };
};
export const deleteItemFromRepositoryList = (repositoryList) => {
  return {
    type: DELETEITEMFROMREPOSITORYLIST,
    payload: repositoryList,
  };
};
