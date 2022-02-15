const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    city: String!
    state: String!
    posts: [BlogPost]
    comments: [Comments]
  }

  type Post {
    _id: ID!
    author: User
    title: String
    body: String
    comments: [Comments]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(userId: ID!): User
    allPosts: [BlogPost]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!, confirmpassword: String!, city: String!, state: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;