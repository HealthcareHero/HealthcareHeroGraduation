import { GraphQLRequest, UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { CommonRequest } from 'client/data-access/common/types/index.type'

export type UseCreateFeedPostRequest = GraphQLRequest & CommonRequest & {
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
