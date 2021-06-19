import { FeedPost } from 'server/models/feeds/index.type'
import { execute } from 'server/data-access/execute'
import { getFeedPosts as service} from 'server/data-access/execute/services/feeds/getFeedPosts'
import { mock_getFeedPosts as mockService} from 'server/data-access/execute/mocks/services/feeds/getFeedPosts'

export const getFeedPosts = async (): Promise<FeedPost[]> => {
  const result = execute(service(), mockService());
  return result;
}
