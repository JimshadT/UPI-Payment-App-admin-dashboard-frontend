import apisauce from "apisauce";
import get from "lodash/get";
import hasIn from "lodash/hasIn";
import { logoutUser } from "store/actions";
import { toast } from "react-toastify";
import { history } from "utils";
import { graphqlBaseUrl, paysackBaseUrl } from "helpers";
import { store } from "store/store";

const SOMETHING_WENT_WRONG = "Something went wrong.";

toast.configure();

const logOutUser = async () => {
    history.push("/login");
    store.dispatch(logoutUser());
};

const checkForErrors = (error) => {
    if (hasIn(error, "message.message")) {
        const statusCode = get(error, "message.statusCode", 400);
        if (statusCode === 401) {
            toast.error("Unauthorized");
            logOutUser();
        } else {
            toast.error(get(error, "message.message", SOMETHING_WENT_WRONG));
        }
    } else if (hasIn(error, "message")) {
        toast.error(get(error, "message", SOMETHING_WENT_WRONG));
    } else if (typeof error === "string") {
        toast.error(error ?? SOMETHING_WENT_WRONG);
    } else {
        toast.error(SOMETHING_WENT_WRONG);
    }
};

// eslint-disable-next-line consistent-return
const isAuthorized = (resp) => {
    if (resp.status === 401) return logOutUser();

    if (!resp.ok) return checkForErrors(get(resp, "data.errors[0]"));

    if (resp.ok && hasIn(resp, "data.errors")) {
        return checkForErrors(get(resp, "data.errors[0]"));
    }

    if (resp.ok && hasIn(resp, "data.error")) {
        return checkForErrors(get(resp, "data.error"));
    }
};

const customResponseStatus = (response) => {
    if (!response.ok) {
        response.data.customStatus = false;
    } else if (response?.data?.errors) {
        response.data.customStatus = false;
    } else {
        response.data.customStatus = true;
    }
};

export const apiConfig = () => {
    const api = apisauce.create({
        baseURL: graphqlBaseUrl,
        timeout: 30000,
    });

    api.addMonitor(isAuthorized);
    api.addResponseTransform(customResponseStatus);

    return api;
};

export const paysackApiConfig = () => {
    const api = apisauce.create({
        baseURL: paysackBaseUrl,
        timeout: 30000,
    });

    api.addMonitor(isAuthorized);
    api.addResponseTransform(customResponseStatus);

    return api;
};
