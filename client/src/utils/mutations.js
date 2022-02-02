import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $confirmpassword: String!, $city: String!, $state: String!) {
    addUser(name: $name, email: $email, password: $password, confirmpassword: $confirmpassword, city: $city, state: $state) {
      token
      user {
        _id
        name
      }
    }
  }
`;