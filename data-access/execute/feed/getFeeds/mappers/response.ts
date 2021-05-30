import { UseDragonsResponse } from 'data-access/data-store/services/space-land-for-test-only/test-query/dragons/index.type'
import { GetFeedsResponse } from '../index.type'

export const mapResponse = (response: UseDragonsResponse): GetFeedsResponse => {
  return { ... response }
}
