import { RequestDocument } from 'graphql-request/dist/types'

export type UseGraphQLRequest = RequestDocument; 

export interface UseGraphQLResponse {
  data: any | null;
  isLoading: boolean;
  isError: boolean | null;
}

export interface UseGraphQLVariables {
  [key: string]: any;
}
