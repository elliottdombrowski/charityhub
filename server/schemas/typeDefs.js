const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    city: String!
    state: String!
    contacts: Int
  }

  type Post {
    _id: ID!
    authorId: String
    title: String
    body: String
  }

  type Comment {
    _id: ID!
    commentAuthor: String
    commentBody: String
    commentCreatedAt: String
  }

  type Charities {
    _id: ID!
    charityName: String
    charityDescription: String
    charityEmail: String
    charityAddress: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(userId: ID!): User
    allPosts: [Post]
    singlePost(postId: ID!): Post
    allCharities: [Charities]
    allComments: [Comment]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!, confirmpassword: String!, city: String!, state: String!, contacts: Int): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;