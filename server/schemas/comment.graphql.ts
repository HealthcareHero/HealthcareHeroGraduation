import { gql } from 'apollo-server-micro'

export const Comment = gql`
  type Comment {
    author: String
    message: String!
    timestamp: String!
  }
`;