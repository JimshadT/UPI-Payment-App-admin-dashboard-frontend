export const ADMIN_LOGIN = `query ($email: String!, $password: String!) {
  admin_login(email: $email, password: $password) {
    message
    token
  }
}
`;

export const LIST_ALL_USERS = `query{
  list_users{
    data{
      _id
      email
      username
      mobile
      total_creditline
      available_creditline
    }
  }
}
`;

export const CREATE_NEW_USER = `mutation ($username: String!, $mobile:String, $email: String!) {
  create_user(username: $username, email: $email ,mobile:$mobile) {
    message
  }
}
`;

export const UPDATE_USER = `mutation ($id:String! $username: String!, $email: String) {
  update_user(_id:$id username: $username, email: $email) {
    message
  }
}
`;

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
