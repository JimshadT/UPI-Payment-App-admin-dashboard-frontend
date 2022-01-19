import { TOGGLE_MODAL } from "../types";

const modalReducer = (state = false, { type, payload }) => {
    switch (type) {
        case TOGGLE_MODAL:
            return payload;
        default:
            return state;
    }
};

export default modalReducer;
