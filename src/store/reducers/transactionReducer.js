import { LIST_ALL_TRANSACTIONS, RESET_TRANSACIONS_LIST_DATA } from "../types";

const INITIAL_STATE = {
    transactions: {
        list: [],
        showViewMore: false,
        offset: 0,
        limit: 10,
    },
    transactionDetails: {},
    filteredData: [],
};

const transactionReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LIST_ALL_TRANSACTIONS:
            return {
                ...state,
                transactions: { limit: 10, ...payload },
            };

        case RESET_TRANSACIONS_LIST_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default transactionReducer;
