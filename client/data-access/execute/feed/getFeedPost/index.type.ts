import { GraphQLRequest, UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { CommonRequest } from 'client/data-access/common/types/index.type'
import { FeedPost } from '../common/types/index.type'

export type UseGetFeedPostRequest = GraphQLRequest & CommonRequest & {
  id: string,
}

export interface UseGetFeedPostResponse extends UseGraphQLResponse {
  data: FeedPost | null;
}
