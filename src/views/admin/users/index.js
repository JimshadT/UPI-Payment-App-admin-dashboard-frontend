import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid } from "@material-ui/core";
import { PersonAdd,Delete,Edit } from "@material-ui/icons";
// core components
import CustomHeader from "components/Headers/CustomHeader";

import componentStyles from "assets/theme/views/admin/tables.js";
import CustomTable from "components/CustomTable/CustomTable";
import CustomIconButton from "components/CustomButton/CustomIconButton";
import CustomSidebar from "components/CustomSidebar/CustomSidebar";
import { toggleSidebar } from "store/actions";
import { validationSchema, initialValues, handleSingleUserCreation } from "./CreateSingleUser";
import { initialUserValues,handleSingleUserUpdation,generateUpdateInputs } from "./UpdateUser";
import { listUsers } from "store/actions";

const useStyles = makeStyles(componentStyles);

function Users() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [addnew, setAddnew] = useState(true);
    const [userData,setUserdata] = useState({});
    const { usersData, showViewMore } = useSelector(
        ({
            users: {
                users: { list, showViewMore },
            },
        }) => ({
            usersData: list,
            showViewMore,
        })
    );
    useEffect(() => {
        dispatch(listUsers());
    }, []);
    const updateButton = (data) => {
        dispatch(toggleSidebar(true))
        setUserdata(data);
        setAddnew(false);
        }
    

    return (
        <>
            <CustomHeader />
            <Container maxWidth={false} component={Box} marginTop="-6rem" classes={{ root: classes.containerRoot }}>
                <Grid container justify="flex-start" spacing={3} style={{ padding: "0px 10px" }}>
                    <Grid item xl={1} lg={3} md={3} sm={6} xs={3} style={{ padding: 5 }} key="addNewBtn">
                        <CustomIconButton
                            title="Add new User"
                            icon={<PersonAdd />}
                            onClick={() => {
                                setAddnew(true)
                                dispatch(toggleSidebar(true))
                            }}
                            style={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
                <br />
                <CustomTable
                    title="Users"
                    columns={[
                        { title: "Actions", render:(rawdata)=> <CustomIconButton 
                        title="Update User" icon={<Edit/>} size="small" variant="outlined"
                        onClick={()=>updateButton(rawdata)}/>},
                        { title: "UserName", field: "username" },
                        { title: "Email", field: "email" },
                        { title: "Mobile", field: "mobile" },
                     
                    ]}
                    data={usersData}
                />
            </Container>
            <CustomSidebar
            
                title={addnew?"Add User":"Update User"}
                inputs={generateUpdateInputs()}
                validationSchema={validationSchema}
                initialValues={addnew?initialValues:initialUserValues(userData)}
                handleSubmit={addnew?handleSingleUserCreation:handleSingleUserUpdation}
            />
        </>
    );
}

export default Users;
