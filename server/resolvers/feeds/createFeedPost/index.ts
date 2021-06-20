import { CreateFeedPostArgument } from './index.type'
import { FeedPost } from 'server/models/feeds/index.type'
import { execute } from 'server/data-access/execute'
import { getFeedPost as service} from 'server/data-access/execute/services/feeds/getFeedPost'
import { mock_getFeedPost as mockService} from 'server/data-access/execute/mocks/services/feeds/getFeedPost'
import { UnknownError } from 'server/errors/UnknownError'

export const createFeedPost = async (parent: any, args: any): Promise<String> => {
  // console.log("IN SERVER HERE", args)
  const { author, recipient, message, media, tags, enableComment } = args as CreateFeedPostArgument;
  return message; // TODO: Return ID
}
