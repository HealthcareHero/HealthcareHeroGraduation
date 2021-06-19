import { GetFeedPostRequest, GetFeedPostResponse } from 'server/data-access/execute/services/feeds/getFeedPost/index.type'
import { feed1, feed2, feed3, feed4, feed5 } from '../../../data/feeds'

export const mock_getFeedPost = (request: GetFeedPostRequest): GetFeedPostResponse => {
  switch (request.id) {
    case feed1.id:
      return feed1;
    case feed2.id:
      return feed2;
    case feed3.id:
      return feed3;
    case feed4.id:
      return feed4;
    case feed5.id:
      return feed5;
    default:
      return null;
  }
}
