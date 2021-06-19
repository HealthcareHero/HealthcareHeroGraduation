import { GraphQLRequest, UseGraphQLResponse } from 'client/data-access/common/graphql/index.type'
import { CommonRequest } from 'client/data-access/common/types/index.type'

export type UseUploadMediaRequest = GraphQLRequest & CommonRequest & {
  base64String: string;
}

export interface UseUploadMediaResponse extends UseGraphQLResponse {
  data: Data;
}

export type Data = string | null;