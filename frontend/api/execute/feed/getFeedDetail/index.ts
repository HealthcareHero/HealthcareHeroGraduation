import { GetFeedDetailRequest, GetFeedDetailResponse } from './index.type'
import { useDragon } from 'api/data-access/services/space-land-for-test-only/test-query/dragon'
import { mapResponse } from './mappers/response'

export const useGetFeedDetail = ({ id }: GetFeedDetailRequest): GetFeedDetailResponse => {
  const response = useDragon(id);
  return {
    ...mapResponse(response)
  };
};
