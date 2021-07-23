import { SEARCH } from "../../actionTypes";
export const setSearchCheck = (value) => {
  return {
    type: SEARCH,
    payload: value,
  };
};
