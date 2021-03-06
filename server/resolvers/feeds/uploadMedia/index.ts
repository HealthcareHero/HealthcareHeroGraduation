import { UploadMediaArgument, UploadMediaResult } from './index.type';
import { execute } from 'server/data-access/execute'
import { uploadMedia as service} from 'server/data-access/execute/services/feeds/uploadMedia'
import { mock_uploadMedia as mockService} from 'server/data-access/execute/mocks/services/feeds/uploadMedia'

export const uploadMedia = async (parent: any, args: any): Promise<UploadMediaResult> => {
  const request = args as UploadMediaArgument;
  const result = await execute<UploadMediaResult>(async () => await service(request), async () => await mockService(request));
  return result;
}
