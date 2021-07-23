import { OPENMODAL, CLOSEMODAL } from "../actionTypes";
export const openModal = () => {
  return {
    type: OPENMODAL,
    payload: true,
  };
};

export const closeModal = () => {
  return {
    type: CLOSEMODAL,
    payload: false,
  };
};
