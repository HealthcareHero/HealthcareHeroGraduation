import { GetFeedPostsResult } from './index.type'
import { execute } from 'server/data-access/execute'
import { getFeedPosts as service} from 'server/data-access/execute/services/feeds/getFeedPosts'
import { mock_getFeedPosts as mockService} from 'server/data-access/execute/mocks/services/feeds/getFeedPosts'

export const getFeedPosts = async (): Promise<GetFeedPostsResult> => {
  const result = await execute<GetFeedPostsResult>(async () => await mockService(), async () => await mockService());
  // TODO: Change to real service
  return result;
}
