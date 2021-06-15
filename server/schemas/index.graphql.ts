import { gql } from "apollo-server-micro";

export const Query = gql`
  type Query {
    feedPost(id: ID!): FeedPost
    feedPosts: [FeedPost!]
  }
`;

export const Mutation = gql`
  type Mutation {
    createFeedPost(
      author: String
      recipient: String!
      message: String!
      media: [MediaFile!]
      tags: [String!]
      enableComment: Boolean!
    ): ID
  }
`;
