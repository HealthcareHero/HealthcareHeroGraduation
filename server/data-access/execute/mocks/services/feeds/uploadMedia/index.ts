import { UploadMediaRequest, UploadMediaResponse } from 'server/data-access/execute/services/feeds/uploadMedia/index.type'

export const mock_uploadMedia = async (request: UploadMediaRequest): Promise<UploadMediaResponse> => {
  return "MOCK_URL";
}
