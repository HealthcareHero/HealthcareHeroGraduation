import { NewFeedPost, FeedPost, ExecuteCreateFeedPostResult, ExecuteGetFeedPostsResult } from './types/index.type'
import { addNewRecord, getRecords } from 'server/data-access/integrations/firebase/actions'
import { TABLE_FEEDPOSTS, FIELD_TIMESTAMP } from './constants'
import { getDurationFromNow } from 'common/utils/datetime'

export const executeCreateFeedPost = async (feedPost: NewFeedPost): Promise<ExecuteCreateFeedPostResult> => {
  const result = await addNewRecord(TABLE_FEEDPOSTS, feedPost);
  return {
    id: result.id
  };
}
