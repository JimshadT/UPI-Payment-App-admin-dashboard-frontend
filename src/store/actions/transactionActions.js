
import { TOGGLE_LOADING, LIST_USERS_DATA } from "../types";
import { post } from "services";
import { LIST_TRANSACTIONS,TRANSACTION_DETAILS } from "graphql";


export const listTransactions = () => {
    return async (dispatch, getState) => {
        dispatch({ type: TOGGLE_LOADING, payload: true });


        let apiResponse = await post("", {
            query: LIST_TRANSACTIONS,
        });
        if (apiResponse.data.customStatus) {
            let {
                list_transactions: { data },
            } = apiResponse.data.data;

            dispatch({
                type: LIST_USERS_DATA,
                payload: {
                    list: data,
                    showViewMore: false,
                    offset: data.length,
                },
            });
        }
        dispatch({ type: TOGGLE_LOADING, payload: false });
    };
};

export const transaction_details = (requestData) => {
    return async (dispatch, getState) => {
        dispatch({ type: TOGGLE_LOADING, payload: true });


        let apiResponse = await post("", {
            query: TRANSACTION_DETAILS,
            variables:requestData,
        });
        if (apiResponse.data.customStatus) {
            let {
                transaction_details: { data },
            } = apiResponse.data.data;

            dispatch({
                type: LIST_USERS_DATA,
                payload: {
                    list: data,
                    showViewMore: false,
                    offset: data.length,
                },
            });
        }
        dispatch({ type: TOGGLE_LOADING, payload: false });
    };
};