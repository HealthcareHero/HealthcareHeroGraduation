import { UploadMediaArgument, UploadMediaResult } from './index.type';
import { execute } from 'server/data-access/execute'
import { uploadMedia as service} from 'server/data-access/execute/services/feeds/uploadMedia'
// import { mock_getFeedPosts as mockService} from 'server/data-access/execute/mocks/services/feeds/getFeedPosts'

export const uploadMedia = async (parent: any, args: any): Promise<UploadMediaResult> => {
  const request = args as UploadMediaArgument;
  const result = execute<UploadMediaResult>(() => service(request), () => service(request));
  // TODO: Replace with mock service
  return result;
}
