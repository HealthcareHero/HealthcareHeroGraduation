import { gql } from 'apollo-server-micro'

export const FeedPost = gql`
  type FeedPost {
    id: ID!
    author: String!
    recipient: String!
    message: String!
    media: [String!]
    tags: [String!]
    enableComment: Boolean!
    comments: [Comment!]
    likeCount: Int!
    timestamp: String!
  }
`;
