import { GetFeedsResponse } from './index.type'
import { useDragons } from 'api/data-access/services/space-land-for-test-only/test-query/dragons'
import { mapResponse } from './mappers/response'

export const useGetFeeds = (): GetFeedsResponse => {
  const response = useDragons();
  return {
    ...mapResponse(response)
  };
};
