import { UseDragonResponse } from 'api/data-access/services/space-land-for-test-only/test-query/dragon/index.type'
import { GetFeedDetailResponse } from '../index.type'

export const mapResponse = (response: UseDragonResponse): GetFeedDetailResponse => {
  return { ... response }
}
