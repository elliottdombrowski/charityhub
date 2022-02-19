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
      contacts
    }
  }
`;

export const QUERY_ALLPOSTS = gql`
  query allPosts {
    allPosts {
      _id
      authorId
      title
      body
    }
  }
`;

export const QUERY_SINGLEPOST = gql`
  query singlePost($postId: ID!) {
    singlePost(postId: $postId) {
      _id
      authorId
      title
      body
    }
  }
`;

export const QUERY_ALLCHARITIES = gql`
  query allCharities {
    allCharities {
      _id
      charityName
      charityDescription
      charityEmail
      charityAddress
    }
  }
`;