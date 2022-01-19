import { LIST_USERS_DATA, RESET_USERS_LIST_DATA } from "../types";

const INITIAL_STATE = {
    users: {
        list: [],
        showViewMore: false,
        offset: 0,
        limit: 10,
    },
    userDetails: {},
    filteredData: [],
};

const usersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LIST_USERS_DATA:
            return {
                ...state,
                users: { limit: 10, ...payload },
            };

        case RESET_USERS_LIST_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default usersReducer;
