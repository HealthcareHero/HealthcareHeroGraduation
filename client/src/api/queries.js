import { gql } from 'apollo-boost';

export const FEED_POST = gql`
  query FeedPost ($id: String!) {
    feedPost(id: $id) {
      id,
      author,
      message,
      media,
      tags,
      comments {
        author,
        message,
        timestamp
      },
      commenting,
      likeCount,
      timestamp
    }
  }
`;

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