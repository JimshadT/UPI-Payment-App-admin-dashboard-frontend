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
