import { GetFeedPostArgument, GetFeedPostResult } from './index.type'
import { execute } from 'server/data-access/execute'
import { getFeedPost as service} from 'server/data-access/execute/services/feeds/getFeedPost'
import { mock_getFeedPost as mockService} from 'server/data-access/execute/mocks/services/feeds/getFeedPost'

export const getFeedPost = async (parent: any, args: any): Promise<GetFeedPostResult> => {
  const request = args as GetFeedPostArgument;
  const result = await execute<GetFeedPostResult>(async () => await service(request), async () => await service(request));
  // TODO: Change to real service
  return result;
}
