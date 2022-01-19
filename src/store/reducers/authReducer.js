import { LOGIN_SUCCESS } from "../types";

const INITIAL_STATE = {
    token: null,
    isLoggedIn: false,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload,
            };
        default:
            return state;
    }
};

export default authReducer;
