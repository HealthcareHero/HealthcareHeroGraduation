import { UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { FeedPost } from '../common/types/index.type'

export interface UseGetFeedPostsResponse extends UseGraphQLResponse {
  data: Data;
 }

 export type Data = FeedPost[] | null;