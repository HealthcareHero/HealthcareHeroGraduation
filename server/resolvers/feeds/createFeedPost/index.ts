import { CreateFeedPostArgument, CreateFeedPostResult } from './index.type'
import { execute } from 'server/data-access/execute'
import { createFeedPost as service} from 'server/data-access/execute/services/feeds/createFeedPost'
import { mock_createFeedPost as mockService} from 'server/data-access/execute/mocks/services/feeds/createFeedPost'

export const createFeedPost = async (parent: any, args: any): Promise<CreateFeedPostResult> => {
  const request = args as CreateFeedPostArgument;
  const result = await execute<CreateFeedPostResult>(() => mockService(request), () => mockService(request));
  return result; // TODO: Use real service
}
