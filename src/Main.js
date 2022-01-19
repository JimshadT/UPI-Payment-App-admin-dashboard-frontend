import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import theme from "assets/theme/theme.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { history } from "utils";

const Main = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Router history={history}>
                    <Switch>
                        <Route path="/app" render={(props) => <AdminLayout {...props} />} />
                        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                        <Redirect from="/" to="/auth/login" />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default Main;
