import { SETSELECTEDREPO } from "../actionTypes";
export const setSelectedRepo = (selectedRepo) => {
  return {
    type: SETSELECTEDREPO,
    payload: selectedRepo,
  };
};

