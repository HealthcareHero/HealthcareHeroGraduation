import { NewFeedPost, ExecuteCreateFeedPostResult } from './types/index.type'
import { addNewRecord } from 'server/data-access/integrations/firebase/actions'
import { TABLE_FEEDPOSTS } from './constants'

export const executeCreateFeedPost = async (feedPost: NewFeedPost): Promise<ExecuteCreateFeedPostResult> => {
  const result = await addNewRecord(TABLE_FEEDPOSTS, feedPost);
  return {
    id: result.id
  };
}