import { API_URL } from 'client/data-access/data-store/services/vercel'
import { gql } from 'graphql-request'
import { useGraphQL } from 'client/data-access/data-store/architecture/graphql'
import { UseGetFeedPostsResponse } from './index.type'

const query = gql`
  {
    feedPosts {
      id, 
      author,
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
  return useGraphQL(API_URL, query);
};
