import { gql } from 'graphql-request'
import { useGraphQL } from 'client/data-access/common/graphql'
import { UseGetFeedPostRequest, UseGetFeedPostResponse } from './index.type'
import { mapResponseData } from './mappers'

const query = gql`
  query feedPost($id: ID!) {
    feedPost(id: $id) {
      id,
      author,
      recipient,
      message,
      media,
      tags,
      comments {
        author,
        message,
        timestamp
      },
      enableComment,
      likeCount,
      timestamp
    }
  }
`;

export const useGetFeedPost = (request: UseGetFeedPostRequest): UseGetFeedPostResponse => {
  return useGraphQL({
    graphqlRequest: query,
    graphqlVariables: request,
    mapResponseData,
  });
};
