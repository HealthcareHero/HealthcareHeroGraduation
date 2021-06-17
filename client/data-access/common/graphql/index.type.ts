import { RequestDocument } from 'graphql-request/dist/types'
import { CommonError } from 'client/data-access/common/errors/index.type'

export type UseGraphQLRequest = RequestDocument; 

export interface UseGraphQLResponse {
  execute: any;
  data: any | null;
  error: CommonError[] | null;
  isLoading: boolean;
}

export interface UseGraphQLVariables {
  [key: string]: any;
}
