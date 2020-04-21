import { gql } from 'apollo-boost';

export const ADD_FEED_POST = gql`
  mutation AddFeedPost($author: String!, $message: String, $media: [String!], $tagList: [String!], $allowCommenting: Boolean!) {
    addFeedPost(author: $author, message: $message, media: $media, tags: $tagList, commenting: $allowCommenting)
  }
`;

export const INCREMENT_LIKE = gql`
  mutation IncrementLike($feedPostId: String!) {
    incrementLike(feedPostId: $feedPostId)
  }
`;

export const DECREMENT_LIKE = gql`
  mutation DecrementLike($feedPostId: String!) {
    decrementLike(feedPostId: $feedPostId)
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($feedPostId: String!, $author: String, $message: String!) {
    addComment(feedPostId: $feedPostId, author: $author, message: $message)
  }
`;