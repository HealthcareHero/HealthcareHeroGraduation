import { CreateFeedPostArgument } from './index.type'
import { FeedPost } from 'server/models/feeds/index.type'
import { execute } from 'server/data-access'
import { getFeedPost as service} from 'server/data-access/firebase/services/feeds/getFeedPost'
import { mock_getFeedPost as mockService} from 'server/data-access/firebase/mock/services/feeds/getFeedPost'

export const createFeedPost = async (parent: any, args: any): Promise<String> => {
  console.log("IN SERVER HERE", args)
  const { author, recipient, message, media, tags, enableComment } = args as CreateFeedPostArgument;
  console.log("MESSAGE: ", message)
  console.log("MEDIA: ", media);
  return message; // TODO: Return ID
}
