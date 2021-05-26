import { Dragon } from '../mock.type'

export interface UseDragonsResponse {
  data: Dragon[] | null;
  isLoading: boolean;
  isError: boolean;
}

