import { gql } from 'apollo-server-micro'

export const Query = gql`
  type Query {
    feedPost(id: ID!): FeedPost
    feedPosts: [FeedPost]
  }
`;
