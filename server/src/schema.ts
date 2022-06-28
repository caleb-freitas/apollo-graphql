import {gql} from 'apollo-server';

export const typeDefs = gql`
  type Okr {
    id: String
    title: String
  }

  type Query {
    okrs: [Okr!]!
  }
`;
