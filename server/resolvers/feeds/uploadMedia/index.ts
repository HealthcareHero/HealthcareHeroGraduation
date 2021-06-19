import { UploadMediaArgument } from './index.type'
import { FeedPost } from 'server/models/feeds/index.type'
import { execute } from 'server/data-access'
import { getFeedPost as service} from 'server/data-access/firebase/services/feeds/getFeedPost'
import { mock_getFeedPost as mockService} from 'server/data-access/firebase/mock/services/feeds/getFeedPost'

export const uploadMedia = async (parent: any, args: any): Promise<String> => {
  const { base64String } = args as UploadMediaArgument;

  const result = `URL_FROM_SERVER: ${base64String.substr(base64String.length-10)}`;
  console.log(result)
  return result; // TODO: Return ID
}
