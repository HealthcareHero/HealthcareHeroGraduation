import { GetFeedPostRequest, GetFeedPostResponse } from './index.type'
import { getDocument } from 'server/data-access/integrations/firebase/actions'
import { getFeedPostId } from './helpers'
import { TABLE_FEEDPOSTS } from 'server/data-access/execute/common/constants'
import { getDurationFromNow } from 'common/utils/datetime'
import { ApplicationError } from 'server/errors/ApplicationError'
import { FAILURE_TO_RETRIEVE_FEEDS_ERROR } from 'server/errors/ApplicationError/constants/feeds'

export const getFeedPost = async (request: GetFeedPostRequest): Promise<GetFeedPostResponse> => {
  try {
    const feedPostId = getFeedPostId(request);
    const result = await getDocument(TABLE_FEEDPOSTS, feedPostId);
    const data = result.data();
    return {
      id: result.id,
      author: data.author,
      recipient: data.recipient,
      message: data.message,
      media: data.media,
      tags: data.tags,
      comments: null,
      // comments: data.commenting ? getAllCommentsForFeedPost(id) : null,
      enableComment: data.enableComment,
      likeCount: data.likeCount,
      timestamp: getDurationFromNow(data.timestamp.toDate())
    }
  } catch (error) {
    throw new ApplicationError(FAILURE_TO_RETRIEVE_FEEDS_ERROR, error);
  }
}
