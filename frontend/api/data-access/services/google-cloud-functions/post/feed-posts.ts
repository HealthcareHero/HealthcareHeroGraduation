import { gql } from 'graphql-request';

export const FEED_POSTS = gql`
  {
    feedPosts {
      id, 
      author,
      message,
      media,
      tags,
      commenting,
      likeCount,
      timestamp
    }
  }
`;