import { GetCommentsRequest, GetCommentsResponse } from 'server/data-access/execute/services/comments/getComments/index.type'
import { feed1, feed2, feed3, feed4, feed5 } from '../../../data/feeds'

export const mock_getComments = async (request: GetCommentsRequest): Promise<GetCommentsResponse> => {
  switch (request.feedPostId) {
    case feed1.id:
      return feed1.comments;
    case feed2.id:
      return feed2.comments;
    case feed3.id:
      return feed3.comments;
    case feed4.id:
      return feed4.comments;
    case feed5.id:
      return feed5.comments;
    default:
      return null;
  }
}
