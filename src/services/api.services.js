import { apiConfig } from "./api.config";
import { store } from "../store/store";

export const post = async (path, params, axiosConfig = {}) => {
    const state = store.getState();
    const token = await state.auth.token;
    return await apiConfig().post(path, params, {
        headers: { "x-access-token": token },
        ...axiosConfig,
    });
};

export const unAuthorizedPost = async (path, params, axiosConfig = {}) => {
    return await apiConfig().post(path, params, { ...axiosConfig });
};
