import { TOGGLE_SIDEBAR } from "../types";

export const toggleSidebar = (data) => {
    return async (dispatch) => {
        dispatch({ type: TOGGLE_SIDEBAR, payload: data });
    };
};

export const toggleSidebar2 = (data) => {
    return async (dispatch) => {
        dispatch({ type: TOGGLE_SIDEBAR, payload: data });
    };
};