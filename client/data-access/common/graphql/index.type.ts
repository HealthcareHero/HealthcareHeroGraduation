import { RequestDocument } from 'graphql-request/dist/types'
import { CommonError } from 'client/common/errors/index.type'

export interface UseGraphQLRequest {
  immediate?: boolean;
  graphqlRequest: GraphQLRequest;
  graphqlVariables?: GraphQLVariables;
  mapResponseData?: (response: GraphQLResponseData) => any;
}

export interface UseGraphQLResponse {
  execute: any;
  data: GraphQLResponseData;
  error: CommonError | null;
  isLoading: boolean;
}

export type GraphQLRequest = RequestDocument; 

export type GraphQLResponseData = any | null;

export interface GraphQLVariables {
  [key: string]: any;
}
