import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      _id
      name
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      city
      state
    }
  }
`;

export const QUERY_ALLPOSTS = gql`
  query allPosts {
    allPosts {
      _id
      author
      title
      body
    }
  }
`;