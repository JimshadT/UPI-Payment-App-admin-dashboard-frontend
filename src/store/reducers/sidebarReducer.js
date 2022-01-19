import { TOGGLE_SIDEBAR } from "../types";

const sidebarReducer = (state = false, { type, payload }) => {
    switch (type) {
        case TOGGLE_SIDEBAR:
            return payload;
        default:
            return state;
    }
};

export default sidebarReducer;
