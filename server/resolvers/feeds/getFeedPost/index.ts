import { GetFeedPostArgument } from './index.type'
import { FeedPost } from 'server/models/feeds/index.type'
import { execute } from 'server/data-access'
import { getFeedPost as service} from 'server/data-access/firebase/services/feeds/getFeedPost'
import { mock_getFeedPost as mockService} from 'server/data-access/firebase/mock/services/feeds/getFeedPost'

export const getFeedPost = async (parent: any, args: any): Promise<FeedPost> => {
  const { id } = args as GetFeedPostArgument;

  const request = { id }
  const result = execute(service(request), mockService(request));
  console.log(result)

  return result;
}
