import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { Drawer, Button, makeStyles } from "@material-ui/core";
import {
    CustomTextInput,
    CustomNumberInput,
    CustomDropdown,
    CustomTextAreaInput,
    CustomDateTimePicker,
    CustomDatePicker,
    CustomRadioButton,
    CustomMultiDropdown,
    CustomAsyncMultiDropdown,
    CustomAsyncDropdown,
    CustomFileUpload,
} from "components/CustomInputs";
import { toggleSidebar } from "store/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawer: {
        width: 350,
        zIndex: 2030,
        background: "#f2f3f4",
    },
    buttonDiv: {
        position: "fixed",
        bottom: "20px",
        display: "inline-flex",
    },
    submitButton: {
        marginLeft: "73px",
    },
    cancelButton: {
        marginLeft: "20px",
    },
}));

const CustomSidebar = ({
    title = "",
    anchor = "right",
    inputs,
    initialValues,
    validationSchema,
    handleSubmit,
    buttonText = "Submit",
    ...props
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading, showSidebar } = useSelector(({ loading, sidebar }) => ({
        loading,
        showSidebar: sidebar,
    }));

    const generateInputs = (inputs, components) => {
        const inputComponents = [];
        inputs.map((items, index) => {
            if (items.visibility) {
                switch (items.type) {
                    case "text":
                        inputComponents.push(<CustomTextInput {...items} key={index} {...components} />);
                        break;
                    case "number":
                        inputComponents.push(<CustomNumberInput {...items} key={index} {...components} />);
                        break;
                    case "dropdown":
                        inputComponents.push(<CustomDropdown {...items} key={index} {...components} />);
                        break;
                    case "textarea":
                        inputComponents.push(<CustomTextAreaInput {...items} key={index} {...components} />);
                        break;
                    case "dateTimePicker":
                        inputComponents.push(<CustomDateTimePicker {...items} key={index} {...components} />);
                        break;
                    case "datePicker":
                        inputComponents.push(<CustomDatePicker {...items} key={index} {...components} />);
                        break;
                    case "radioButton":
                        inputComponents.push(<CustomRadioButton {...items} key={index} {...components} />);
                        break;
                    case "multiDropdown":
                        inputComponents.push(<CustomMultiDropdown {...items} key={index} {...components} />);
                        break;
                    case "asyncMultiDropdown":
                        inputComponents.push(<CustomAsyncMultiDropdown {...items} key={index} {...components} />);
                        break;
                    case "asyncDropdown":
                        inputComponents.push(<CustomAsyncDropdown {...items} key={index} {...components} />);
                        break;
                    case "uploader":
                        inputComponents.push(<CustomFileUpload {...items} key={index} {...components} />);
                        break;

                    default:
                        break;
                }
            }
        });
        return inputComponents;
    };

    return (
        <div className={classes.root}>
            <Drawer
                anchor={anchor}
                onClose={() => dispatch(toggleSidebar(false))}
                open={showSidebar}
                BackdropProps={{ invisible: true }}
                classes={{ paper: classes.drawer }}
            >
                <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>{title}</h3>
                <br />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        handleSubmit({ ...values, ...props });
                    }}
                >
                    {(components) => (
                        <form onSubmit={components.handleSubmit}>
                            {generateInputs(inputs, components)}
                            <div className={classes.buttonDiv}>
                                <Button
                                    color="primary"
                                    disabled={loading}
                                    onClick={components.handleSubmit}
                                    type="submit"
                                    variant="contained"
                                    className={classes.submitButton}
                                >
                                    {buttonText}
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => dispatch(toggleSidebar(false))}
                                    className={classes.cancelButton}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Drawer>
        </div>
    );
};

export default CustomSidebar;
