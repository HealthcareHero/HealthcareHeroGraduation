import { gql } from 'graphql-request'

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
