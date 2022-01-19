import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Container,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Backdrop,
    CircularProgress,
} from "@material-ui/core";
// @material-ui/icons components
import Search from "@material-ui/icons/Search";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";

import { adminRoutes } from "routes.js";
import componentStyles from "assets/theme/layouts/admin.js";
import { isLoggedIn } from "utils";

const useStyles = makeStyles(componentStyles);

const Admin = () => {
    const classes = useStyles();
    const location = useLocation();

    const { isAuthenticated, loading } = useSelector(({ auth: { token }, loading }) => ({
        isAuthenticated: isLoggedIn(token),
        loading,
    }));

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        // mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/app" && isAuthenticated) {
                return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
            } else {
                return <Redirect to={"/auth/login"} key={key} />;
            }
        });
    };

    const getBrandText = () => {
        for (let i = 0; i < adminRoutes.length; i++) {
            if (location.pathname.indexOf(adminRoutes[i].layout + adminRoutes[i].path) !== -1) {
                return adminRoutes[i].name;
            }
        }
        return "Brand";
    };

    return (
        <>
            <>
                <Sidebar
                    routes={adminRoutes}
                    logo={{
                        innerLink: "",
                        imgSrc: "",
                        imgAlt: "",
                    }}
                    dropdown={<NavbarDropdown />}
                    input={
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-search-responsive">Search</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-search-responsive"
                                type="text"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Box component={Search} width="1.25rem!important" height="1.25rem!important" />
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    }
                />
                <Backdrop open={loading} style={{ zIndex: 999 }}>
                    <CircularProgress color="secondary" />
                </Backdrop>
                <Box position="relative" className={classes.mainContent}>
                    <AdminNavbar brandText={getBrandText(location.pathname)} />
                    <Switch>
                        {getRoutes(adminRoutes)}
                        <Redirect from="*" to="/app/dashboard" />
                    </Switch>
                    <Container maxWidth={false} component={Box} classes={{ root: classes.containerRoot }}>
                        <AdminFooter />
                    </Container>
                </Box>
            </>
        </>
    );
};

export default Admin;
