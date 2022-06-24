import {gql} from 'apollo-server';

export const typeDefs = gql`
  type User {
    name: String
    email: String
  }

  type Query {
    users: [User]
  }
`;
