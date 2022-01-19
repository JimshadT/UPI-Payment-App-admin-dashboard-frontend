import { toast } from "react-toastify";
import { history } from "utils";
import { TOGGLE_LOADING, LIST_USERS_DATA, RESET_USERS_LIST_DATA,LOGIN_SUCCESS } from "../types";
import { unAuthorizedPost,post } from "services";
import { LIST_ALL_USERS, CREATE_NEW_USER ,ADMIN_LOGIN, UPDATE_USER } from "graphql";


export const adminLogin = (requestData) => {
    return async (dispatch) => {
        dispatch({ type: TOGGLE_LOADING ,payload: true });


        let apiResponse = await unAuthorizedPost("",{
            query: ADMIN_LOGIN,
            variables: requestData
        });
        if (apiResponse.data?.customStatus) {
            let {
                admin_login: {token} 
            } = apiResponse.data.data;

            dispatch({
                type:LOGIN_SUCCESS,
                payload: token
            });
            history.push("/app/users");
        }

        dispatch({ type:TOGGLE_LOADING,payload: false });
    };
};


export const listUsers = () => {
    return async (dispatch, getState) => {
        dispatch({ type: TOGGLE_LOADING, payload: true });

        // const {
        //     users: { limit, offset, list },
        // } = getState().users;

        let apiResponse = await post("", {
            query: LIST_ALL_USERS,
        });
        if (apiResponse.data.customStatus) {
            let {
                list_users: { data },
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


export const createNewUser = (requestData) => {
    return async (dispatch, getState) => {
        dispatch({ type: TOGGLE_LOADING, payload: true });

        let apiResponse = await post("", {
            query: CREATE_NEW_USER,
            variables: requestData,
        });
        dispatch({ type: TOGGLE_LOADING, payload: false });

        if (apiResponse.data.customStatus) {
            // let {
            //     add_new_creator: { message },
            // } = apiResponse.data.data;

            toast.success("User Created");
            dispatch(listUsers());
        }
    };
};

export const updateUser = (requestData) => {
    return async (dispatch, getState) => {
        dispatch({ type: TOGGLE_LOADING, payload: true });

        let apiResponse = await post("", {
            query: UPDATE_USER,
            variables: requestData,
        });
        dispatch({ type: TOGGLE_LOADING, payload: false });

        if (apiResponse.data.customStatus) {
            toast.success("User Updated");
            dispatch(listUsers());
        }
    };
};
