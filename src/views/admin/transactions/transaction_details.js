import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid } from "@material-ui/core";
// core components
import CustomHeader from "components/Headers/CustomHeader";
import CustomTable from "components/CustomTable/CustomTable";
import { useParams } from "react-router-dom";
import componentStyles from "assets/theme/views/admin/tables.js";
import { transaction_details } from "store/actions";
import { store } from "store/store";

const useStyles = makeStyles(componentStyles);

function Transaction_details() {
    let {transaction_id} = useParams();
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
        store.dispatch(transaction_details({transaction_id}));
    }, []);

    return (
      <>
        <CustomHeader />
        <Container
          maxWidth={false}
          component={Box}
          marginTop="-6rem"
          classes={{ root: classes.containerRoot }}
        >
          <CustomTable
                    title=""
                    columns={[
    
                        { title: "Key", field: "transaction_id" },
                        { 
                            title: "From User", 
                            field: "from_user",
                            render:(rowData)=> <p>{rowData?.from_user?.username}</p> 
                        },
                        { title: "Amount", field: "transaction_amount" },
                        { title: "Before Balance", field: "before_balance" },
                        { title: "After Balance", field: "after_balance" },
                        
                    ]}
                    data={usersData}
                />
                
        </Container>
      </>
    );
}

export default Transaction_details;
