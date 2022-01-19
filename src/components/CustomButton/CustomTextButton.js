import React from "react";
import { Button } from "@material-ui/core";

const CustomTextButton = ({ color = "secondary", size= "medium", variant = "contained", onClick, style = {}, title = "Click here" }) => {
    return (
        <Button color={color} variant={variant} onClick={onClick} style={style} size={size}>
            {title}
        </Button>
    );
};

export default CustomTextButton;
