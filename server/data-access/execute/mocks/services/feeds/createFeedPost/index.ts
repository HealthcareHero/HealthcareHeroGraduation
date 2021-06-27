import { CreateFeedPostRequest, CreateFeedPostResponse } from 'server/data-access/execute/services/feeds/createFeedPost/index.type'
import { feed1 } from '../../../data/feeds'

export const mock_createFeedPost = async (request: CreateFeedPostRequest): Promise<CreateFeedPostResponse> => {
  return feed1.id;
}
