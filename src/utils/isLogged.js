import jwtDecode from "jwt-decode";

export const isLoggedIn = (token) => {
    if (token !== null) {
        let decoded = jwtDecode(token);

        if (decoded) {
            const now = Date.now().valueOf() / 1000;
            if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

    return false;
};
