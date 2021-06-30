import { GetFeedPostsResponse, FeedPost } from './index.type'
import { getRecords } from 'server/data-access/integrations/firebase/actions'
import { TABLE_FEEDPOSTS, FIELD_TIMESTAMP } from 'server/data-access/execute/common/constants'
import { getDurationFromNow } from 'common/utils/datetime'
import { ApplicationError } from 'server/errors/ApplicationError'
import { FAILURE_TO_RETRIEVE_FEEDS_ERROR } from 'server/errors/ApplicationError/constants/feeds'

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
        timestamp: getDurationFromNow(data.timestamp.toDate()),
      }
    })

    return mappedResult;
  } catch (error) {
    throw new ApplicationError(FAILURE_TO_RETRIEVE_FEEDS_ERROR, error);
  }
};
