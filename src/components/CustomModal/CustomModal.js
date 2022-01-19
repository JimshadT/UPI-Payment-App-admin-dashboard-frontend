import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { toggleModal } from "store/actions";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const CustomModal = ({ title = "", content }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { loading, showModal } = useSelector(({ loading, modal }) => ({
        loading,
        showModal: modal,
    }));

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={showModal}
                onClose={() => dispatch(toggleModal(false))}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={showModal}>
                    <div className={classes.paper}>
                        <h4 style={{ textTransform: "uppercase" }}>{title}</h4>
                        <p>{content}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default CustomModal;
