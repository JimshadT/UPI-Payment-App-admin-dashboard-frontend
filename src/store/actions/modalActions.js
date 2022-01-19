import { TOGGLE_MODAL } from "../types";

export const toggleModal = (data) => {
    return async (dispatch) => {
        dispatch({ type: TOGGLE_MODAL, payload: data });
    };
};
