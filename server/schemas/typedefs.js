const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstname: String
    email: [String]!
    password: [String]!
    lastName: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(_id: ID!): User
    removeUser(_id: ID!): User
    login(email: String!): User
  }
`;

module.exports = typeDefs;
