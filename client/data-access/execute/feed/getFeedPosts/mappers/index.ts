import { UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { UseGetFeedPostsResponse } from '../index.type'

export const mapResponse = (raw: UseGraphQLResponse): UseGetFeedPostsResponse => {
  if (raw.isLoading) {
    return {
      ...raw,
      data: null,
    }
  }
  return {
    ...raw,
    // data: raw.data.feedPosts,
  };
}
