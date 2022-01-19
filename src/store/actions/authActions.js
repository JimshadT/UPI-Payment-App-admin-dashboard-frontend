import { toast } from "react-toastify";
import { LOGIN_SUCCESS, LOGOUT, TOGGLE_LOADING, TOGGLE_SIDEBAR } from "../types";

const email = "";
const password = "";

export const loginUser = (data) => {
    return async (dispatch) => {
        dispatch({ type: TOGGLE_LOADING, payload: true });
        dispatch({ type: TOGGLE_SIDEBAR, payload: false });

        if (data.email !== email) {
            dispatch({ type: TOGGLE_LOADING, payload: false });
            return toast.error("Email not matching");
        }
        if (data.password !== password) {
            dispatch({ type: TOGGLE_LOADING, payload: false });
            return toast.error("password not matching");
        }

        dispatch({ type: LOGIN_SUCCESS, payload: true });
        dispatch({ type: TOGGLE_LOADING, payload: false });
        
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });
    };
};
