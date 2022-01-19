import React from "react";
import { useHistory } from "react-router-dom";
import { Tooltip, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const CustomBackButton = ({ title = "Back", color = "secondary", variant = "contained", style = {} }) => {
    const history = useHistory();

    return (
        <Tooltip title={title}>
            <Button color={color} variant={variant} onClick={() => history.goBack()} style={style}>
                <ArrowBackIcon fontSize="large" />
            </Button>
        </Tooltip>
    );
};

export default CustomBackButton;
