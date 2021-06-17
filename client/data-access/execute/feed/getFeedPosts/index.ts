import { API_URL } from 'client/data-access/common/constants'
import { gql } from 'graphql-request'
import { useGraphQL } from 'client/data-access/common/graphql'
import { UseGetFeedPostsResponse } from './index.type'
import { mapResponse } from './mappers'

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
  const response = useGraphQL(API_URL, query);
  return mapResponse(response);
};
