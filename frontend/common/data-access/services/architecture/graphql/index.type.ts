import { RequestDocument } from 'graphql-request/dist/types'

export type UseGraphQLRequest = RequestDocument; 

export interface UseGraphQLResponse {
  data: any,
  isLoading: boolean,
  isError: boolean,
}