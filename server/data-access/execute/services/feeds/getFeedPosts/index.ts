import { GetFeedPostsResponse, FeedPost } from './index.type'
import { getRecords } from 'server/data-access/integrations/firebase/actions'
import { TABLE_FEEDPOSTS, FIELD_TIMESTAMP } from 'server/data-access/execute/common/constants'
import { getDurationFromNow } from 'common/utils/datetime'
import { ApplicationError } from 'server/errors/ApplicationError'
import { SUBMISSION_NEW_POST_CREATION_ERROR } from 'server/errors/ApplicationError/constants/submission'
import { logger } from 'server/loggers'

export const getFeedPosts = async (): Promise<GetFeedPostsResponse> => {
  try {
    const result = await getRecords(TABLE_FEEDPOSTS, FIELD_TIMESTAMP, false);
    const mappedResult = result.docs.map((feedPost) => {
      const data = feedPost.data();
      return <FeedPost>{
        id: feedPost.id,
        author: data.author,
        recipient: data.recipient,
        message: data.message,
        media: data.media,
        tags: data.tags,
        enableComment: data.enableComment,
        likeCount: data.likeCount,
        timestamp: getDurationFromNow(data.timestamp),
      }
    })

    return mappedResult;
  } catch (error) {
    logger.error(error)
    throw new ApplicationError(SUBMISSION_NEW_POST_CREATION_ERROR);
  }
};
