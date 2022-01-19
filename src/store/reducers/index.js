import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import usersReducer from "./usersReducer";
import transactionReducer from "./transactionReducer";
import authReducer from "./authReducer";
import { LOGOUT } from "../types";
import sidebarReducer from "./sidebarReducer";
import modalReducer from "./modalReducer";

const appReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    users:usersReducer,
    transactions:transactionReducer,
    sidebar: sidebarReducer,
    modal: modalReducer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
