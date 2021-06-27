import { CreateFeedPostRequest, CreateFeedPostResponse } from './index.type'
import { NewFeedPost } from 'server/data-access/integrations/interface/feeds/types/index.type'
import {
  getAuthor,
  getRecipient,
  getMessage,
  getTags,
  getMedia,
} from './helpers'
import { executeCreateFeedPost } from 'server/data-access/integrations/interface/feeds'
import { ApplicationError } from 'server/errors/ApplicationError'
import { SUBMISSION_NEW_POST_CREATION_ERROR } from 'server/errors/ApplicationError/constants/submission'
import { logger } from 'server/loggers'

export const createFeedPost = async ({ author, recipient, message, media, tags, enableComment }: CreateFeedPostRequest): Promise<CreateFeedPostResponse> => {
  const newPost: NewFeedPost = {
    author: getAuthor(author),
    recipient: getRecipient(recipient),
    message: getMessage(message),
    media: getMedia(media),
    tags: getTags(tags),
    enableComment,
    likeCount: 0,
    timestamp: Date.now.toString(),
  } 

  try {
    const response = await executeCreateFeedPost(newPost);
    return response.id;
  } catch (error) {
    logger.error(error)
    throw new ApplicationError(SUBMISSION_NEW_POST_CREATION_ERROR);
  }
}
