import { GetFeedPostsResponse } from 'server/data-access/firebase/services/feeds/getFeedPosts/index.type'
import { feed1, feed2, feed3, feed4, feed5 } from '../../../data/feeds'

export const mock_getFeedPosts = (): GetFeedPostsResponse => {
  return [
    feed1,
    feed2,
    feed3,
    feed4,
    feed5,
  ];
}
