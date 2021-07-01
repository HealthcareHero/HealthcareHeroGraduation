import { CreateFeedPostRequest, CreateFeedPostResponse, NewFeedPost } from './index.type'
import {
  getAuthor,
  getRecipient,
  getMessage,
  getTags,
  getMedia,
} from './helpers'
import { addDocument } from 'server/data-access/integrations/firebase/actions'
import { getNow } from 'common/utils/datetime'
import { TABLE_FEEDPOSTS } from 'server/data-access/execute/common/constants'
import { ApplicationError } from 'server/errors/ApplicationError'
import { SUBMISSION_NEW_POST_CREATION_ERROR } from 'server/errors/ApplicationError/constants/submission'

export const createFeedPost = async ({ author, recipient, message, media, tags, enableComment }: CreateFeedPostRequest): Promise<CreateFeedPostResponse> => {
  const newPost: NewFeedPost = {
    author: getAuthor(author),
    recipient: getRecipient(recipient),
    message: getMessage(message),
    media: getMedia(media),
    tags: getTags(tags),
    enableComment,
    likeCount: 0,
    timestamp: getNow(),
  } 

  try {
    const result = await addDocument(TABLE_FEEDPOSTS, newPost);
    return result.id;
  } catch (error) {
    throw new ApplicationError(SUBMISSION_NEW_POST_CREATION_ERROR, error);
  }
}
