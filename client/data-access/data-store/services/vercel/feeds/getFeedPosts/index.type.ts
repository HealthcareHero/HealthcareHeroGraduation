import { UseGraphQLResponse } from 'client/data-access/data-store/architecture/graphql/index.type'
import { FeedPost } from 'client/data-access/data-store/services/vercel/common/types/index.type'

export interface UseGetFeedPostsResponse extends UseGraphQLResponse {
  data: Data;
}

export interface Data {
  feedPosts: FeedPost[] | null;
}
