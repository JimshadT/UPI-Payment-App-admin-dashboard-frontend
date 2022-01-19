export const ValidateEmail = (inputText) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputText)) {
        return true;
    } else {
        return false;
    }
};

export const passwordValidator = (password) => {
    if (password.length < 8) {
        return {
            status: false,
            error: "Your password must be at least 8 characters",
        };
    }

    if (password.search(/[a-z]/) < 0) {
        return {
            status: false,
            error: "Your password must contain atleast least one lower case",
        };
    }

    if (password.search(/[A-Z]/) < 0) {
        return {
            status: false,
            error: "Your password must contain atleast least one upper case",
        };
    }

    if (password.search(/[0-9]/) < 0) {
        return {
            status: false,
            error: "Your password must contain at least one digit",
        };
    }

    if (password.search(/[!@#\$%\^\&*\)\(+=._-]/) < 0) {
        return {
            status: false,
            error: "Your password must contain at least one special character",
        };
    }

    return {
        status: true,
        error: "",
    };
};

export const currencyFormat = (number, prefix = "₹") => {
    // return new Intl.NumberFormat("en-IN", {
    //   style: "currency",
    //   currency: "INR",
    // }).format(number);

    return (
        prefix +
        Number(number)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
};
