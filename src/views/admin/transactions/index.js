import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid } from "@material-ui/core";
// core components
import CustomHeader from "components/Headers/CustomHeader";

import componentStyles from "assets/theme/views/admin/tables.js";
import CustomTable from "components/CustomTable/CustomTable";
import CustomTextButton from "components/CustomButton/CustomTextButton";
import { listTransactions } from "store/actions";
import { history } from "utils";

const useStyles = makeStyles(componentStyles);

function Transactions() {
    const classes = useStyles();
    const dispatch = useDispatch();
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
        dispatch(listTransactions());
    }, []);

    return (
        <>
            <CustomHeader />
            <Container maxWidth={false} component={Box} marginTop="-6rem" classes={{ root: classes.containerRoot }}>
                
                <CustomTable
                    title="Transactions"
                    columns={[
                        { title: "Actions", render:(rowData)=> <CustomTextButton 
                        title="open" size="small"
                        onClick={() => history.push(`/app/transactionDetails/${rowData.transaction_id}`)}/>
                        },
                        { title: "Transaction id", field: "transaction_id" },
                        { 
                            title: "From User", 
                            field: "from_user",
                            render:(rowData)=> <p>{rowData?.from_user?.username}</p> 
                        },
                        { 
                            title: "Recipient User", 
                            field: "to_user",
                            render:(rowData)=> <p>{rowData?.to_user?.username}</p>
                        },
                        { title: "Amount", field: "transaction_amount" },
                    ]}
                    data={usersData}
                />
            </Container>
        </>
    );
}

export default Transactions;