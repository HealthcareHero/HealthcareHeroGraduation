import { Dragon } from '../mock.type'

export interface QueryVariables {
  id: string,
}

export interface UseDragonResponse {
  data: Dragon | null;
  isLoading: boolean;
  isError: boolean;
}

