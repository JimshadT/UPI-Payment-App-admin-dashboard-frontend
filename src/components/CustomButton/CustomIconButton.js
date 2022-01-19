import React from "react";
import { Tooltip, Button } from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";

const CustomIconButton = ({
    title = "",
    color = "secondary",
    variant = "contained",
    size = "medium",
    icon = <PostAddIcon />,
    onClick,
    style = {},
}) => {
    return (
        <Tooltip title={title}>
            <Button color={color} variant={variant} onClick={onClick} style={style} size={size}>
                {icon}
            </Button>
        </Tooltip>
    );
};

export default CustomIconButton;
