import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import componentStyles from "assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const CustomHeader = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <div className={classes.header}></div>
        </>
    );
};

export default CustomHeader;
