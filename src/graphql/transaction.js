export const LIST_TRANSACTIONS = `query {
    list_transactions{
      data{
        from_user{
          _id
          username
          email
        }
        to_user{
          _id
          username
          email
        }
        upi_id
        transaction_amount
        after_balance
        before_balance
        transaction_id
      }
    }
  }
  `;
  
  export const TRANSACTION_DETAILS = `query ($transaction_id:String!){
    transaction_details(transaction_id:$transaction_id){
      data{
        from_user{
          _id
          email
          username
          mobile
        }
        to_user{
          _id
          email
          username
          mobile
        }
        upi_id
        transaction_id
        transaction_amount
        before_balance
        after_balance
      }
    }
  }
  `;
  