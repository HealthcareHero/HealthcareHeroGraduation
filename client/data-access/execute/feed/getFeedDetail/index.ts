import { GetFeedDetailRequest, GetFeedDetailResponse } from './index.type'
import { useDragon } from 'client/data-access/data-store/services/space-land-for-test-only/test-query/dragon'
import { mapResponse } from './mappers/response'

export const useGetFeedDetail = ({ id }: GetFeedDetailRequest): GetFeedDetailResponse => {
  const response = useDragon(id);
  return {
    ...mapResponse(response)
  };
};
