import { UseGraphQLRequest, UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { CommonRequest } from 'client/data-access/common/types/index.type'

export type UseCreateFeedPostRequest = UseGraphQLRequest & CommonRequest & {
  author?: string | null;
  recipient: string;
  message: string;
  media: any;
  tags: string[];
  enableComment: boolean;
}

export interface UseCreateFeedPostResponse extends UseGraphQLResponse {
  data: string;
}

// export interface Data {
//   message: string | null;
// }
