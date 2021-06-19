import { UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { UseGetFeedPostsResponse } from '../index.type'

export const mapResponse = (raw: UseGraphQLResponse): UseGetFeedPostsResponse => {
  return {
    ...raw,
    data: raw?.data?.feedPosts,
  };
}
