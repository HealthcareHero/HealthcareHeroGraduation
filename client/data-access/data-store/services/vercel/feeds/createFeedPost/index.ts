import { API_URL } from 'client/data-access/data-store/services/vercel'
import { gql } from 'graphql-request'
import { useGraphQL } from 'client/data-access/data-store/architecture/graphql'
import { UseCreateFeedPostRequest, UseCreateFeedPostResponse } from './index.type'

const mutation = gql`
  mutation createFeedPost($author: String, $recipient: String!, $message: String!, $media: [MediaFile!], $tags: [String!], $enableComment: Boolean!) {
    createFeedPost (
      author: $author,
      recipient: $recipient,
      message: $message,
      media: $media,
      tags: $tags,
      enableComment: $enableComment
    )
  }
`;

export const useCreateFeedPost = (request: UseCreateFeedPostRequest): UseCreateFeedPostResponse => {
  return useGraphQL(API_URL, mutation, request, false);
};
