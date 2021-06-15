import { UseGraphQLRequest, UseGraphQLResponse } from 'client/data-access/data-store/architecture/graphql/index.type'

export type UseCreateFeedPostRequest = UseGraphQLRequest & {
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
