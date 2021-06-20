import { CreateFeedPostRequest, CreateFeedPostResponse } from 'server/data-access/execute/services/feeds/createFeedPost/index.type'

export const mock_createFeedPost = (request: CreateFeedPostRequest): CreateFeedPostResponse => {
  return "MOCK_FEED_POST_ID";
}
