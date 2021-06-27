import { GetFeedPostsResponse } from 'server/data-access/execute/services/feeds/getFeedPosts/index.type'
import { feed1, feed2, feed3, feed4, feed5 } from '../../../data/feeds'

export const mock_getFeedPosts = async (): Promise<GetFeedPostsResponse> => {
  return [
    feed1,
    feed2,
    feed3,
    feed4,
    feed5,
  ];
}
