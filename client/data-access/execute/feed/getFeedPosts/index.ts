import { gql } from 'graphql-request'
import { useGraphQL } from 'client/data-access/common/graphql'
import { UseGetFeedPostsResponse } from './index.type'
import { mapResponseData } from './mappers'

const query = gql`
  {
    feedPosts {
      id, 
      author,
      recipient,
      message,
      media,
      tags,
      enableComment,
      likeCount,
      timestamp
    }
  }
`;


export const useGetFeedPosts = (): UseGetFeedPostsResponse => {
  return useGraphQL({
    graphqlRequest: query,
    mapResponseData
  });
};
