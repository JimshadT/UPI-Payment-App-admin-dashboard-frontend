import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid } from "@material-ui/core";
import { Card,CardContent,Typography } from "@material-ui/core";
// core components
import CustomHeader from "components/Headers/CustomHeader";
import CustomBackButton from "components/CustomButton/CustomBackButton";
import { useParams } from "react-router-dom";
import componentStyles from "assets/theme/views/admin/tables.js";
import { transaction_details } from "store/actions";
import { store } from "store/store";

const useStyles = makeStyles(componentStyles);

function Transaction_details() {
    let {transaction_id} = useParams();
    const classes = useStyles();
    const { transactionData, showViewMore } = useSelector(
        ({
            users: {
                users: { list, showViewMore },
            },
        }) => ({
            transactionData: list,
            showViewMore,
        })
    );
    useEffect(() => {
        store.dispatch(transaction_details({transaction_id}));
    }, []);
console.log(transactionData);
    return (
      <>
        <CustomHeader />
        <Container maxWidth={false} component={Box} marginTop="-6rem" classes={{ root: classes.containerRoot }}>
            <Grid container justify="flex-start" spacing={3} style={{ padding: "0px 10px" }}>
                    <Grid item xl={1} lg={3} md={3} sm={6} xs={3} style={{ padding: 5 }} key="addNewBtn">
                        <CustomBackButton/>
                    </Grid>
                </Grid><br/>
        <Card>
            <CardContent><Typography>
              Transaction ID  : {transactionData[0].transaction_id}<br/>
            </Typography></CardContent></Card><br/>
            
        <Card>
            <CardContent>
            <Typography >
            Sender :<CardContent>
            UserName : {transactionData[0].from_user.username}<br/>
            Email : {transactionData[0].from_user.email}<br/>
            Mobile : {transactionData[0].from_user.mobile}</CardContent>
            Sent Amount : {transactionData[0].transaction_amount}<br/>
            Balance before transaction : {transactionData[0].before_balance}<br/>
            Balance after transaction : {transactionData[0].after_balance}<br/>
        </Typography></CardContent></Card>
        <br/>

        <Card>
            <CardContent>
            <Typography>
            Recipient : <CardContent>
            UserName : {transactionData[1].from_user.username}<br/>
            Email : {transactionData[1].from_user.email}<br/>
            Mobile : {transactionData[1].from_user.mobile}</CardContent>
            Recieved Amount : {transactionData[1].transaction_amount}<br/>
            Balance before transaction : {transactionData[1].before_balance}<br/>
            Balance after transaction : {transactionData[1].after_balance}<br/>
        </Typography></CardContent></Card>
                
        </Container>
      </>
    );
}

export default Transaction_details;
