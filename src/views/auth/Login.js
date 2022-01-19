import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    CircularProgress as Loader,
} from "@material-ui/core";
import { Email, Lock } from "@material-ui/icons";

import componentStyles from "assets/theme/views/auth/login.js";
import { ValidateEmail, passwordValidator } from "utils";
import { adminLogin } from "store/actions";

const useStyles = makeStyles(componentStyles);

function Login() {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();

    const { isLoading } = useSelector(({ loading }) => ({
        isLoading: loading,
    }));

    return (
        <>
            <Grid item xs={12} lg={5} md={7}>
                <Card classes={{ root: classes.cardRoot }}>
                    <CardHeader
                        className={classes.cardHeader}
                        title={
                            <Box fontSize="100%" fontWeight="400" component="small" color={theme.palette.gray[600]}>
                                Sign in
                            </Box>
                        }
                        titleTypographyProps={{
                            component: Box,
                            textAlign: "center",
                            marginBottom: "1rem!important",
                            marginTop: ".5rem!important",
                            fontSize: "1rem!important",
                        }}
                    ></CardHeader>
                    <CardContent classes={{ root: classes.cardContent }}>
                        <Formik
                            initialValues={{
                                email: "admin1@gmail.com",
                                password: "12345",
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
                                password: Yup.string().max(255).required("Password is required"),
                            })}
                            onSubmit={(value) => {
                                dispatch(adminLogin(value));
                            }}
                        >
                            {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <FilledInput
                                        autoComplete="off"
                                        type="email"
                                        fullWidth
                                        placeholder="Email"
                                        name="email"
                                        defaultValue={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        }
                                        required={true}
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {Boolean(touched.email && errors.email) ? (
                                        <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                                            {errors.email}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <br />
                                    <FilledInput
                                        autoComplete="off"
                                        type="password"
                                        fullWidth
                                        placeholder="Password"
                                        name="password"
                                        defaultValue={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        }
                                        required={true}
                                        error={Boolean(touched.password && errors.password)}
                                    />
                                    {Boolean(touched.password && errors.password) ? (
                                        <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                                            {errors.password}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                                        <Button color="primary" variant="contained" onClick={handleSubmit}>
                                            {isLoading ? <Loader color="secondary" size={20} /> : "Sign In"}
                                        </Button>
                                    </Box>
                                </form>
                            )}
                        </Formik>
                    </CardContent>
                </Card>
                <Grid container component={Box} marginTop="1rem">
                    <Grid item xs={6} component={Box} textAlign="left">
                        <a href="#admui" onClick={(e) => e.preventDefault()} className={classes.footerLinks}>
                            Forgot password
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
