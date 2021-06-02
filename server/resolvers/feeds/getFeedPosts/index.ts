import { FeedPost } from 'server/models/feeds/index.type'
import { execute } from 'server/data-access'
import { getFeedPosts as service} from 'server/data-access/firebase/services/feeds/getFeedPosts'
import { mock_getFeedPosts as mockService} from 'server/data-access/firebase/mock/services/feeds/getFeedPosts'

export const getFeedPosts = async (): Promise<FeedPost[]> => {
  const result = execute(service(), mockService());
  return result;
}
