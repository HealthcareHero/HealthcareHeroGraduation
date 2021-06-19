import { GraphQLVariables, UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { CommonRequest } from 'client/data-access/common/types/index.type'
import { FeedPost } from '../common/types/index.type'

export interface UseGetFeedPostRequest extends GraphQLVariables, CommonRequest {
  id: string,
}

export interface UseGetFeedPostResponse extends UseGraphQLResponse {
  data: Data;
}

export type Data = FeedPost | null;