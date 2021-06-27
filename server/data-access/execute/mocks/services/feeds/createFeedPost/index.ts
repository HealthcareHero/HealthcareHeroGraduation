import { CreateFeedPostRequest, CreateFeedPostResponse } from 'server/data-access/execute/services/feeds/createFeedPost/index.type'

export const mock_createFeedPost = async (request: CreateFeedPostRequest): Promise<CreateFeedPostResponse> => {
  return "MOCK_FEED_POST_ID";
}
