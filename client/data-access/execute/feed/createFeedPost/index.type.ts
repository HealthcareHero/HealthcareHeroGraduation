import { GraphQLVariables, UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { CommonRequest } from 'client/data-access/common/types/index.type'

export interface UseCreateFeedPostRequest extends GraphQLVariables, CommonRequest {
  author?: string | null;
  recipient: string;
  message: string;
  media: string[] | null;
  tags: string[] | null;
  enableComment: boolean;
}

export interface UseCreateFeedPostResponse extends UseGraphQLResponse {
  data: string;
}
