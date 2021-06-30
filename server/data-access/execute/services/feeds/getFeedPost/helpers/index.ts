import { GetFeedPostRequest } from '../index.type'
import { ApplicationError } from 'server/errors/ApplicationError'
import { MISSING_FEED_ID_ERROR } from 'server/errors/ApplicationError/constants/feeds'

export const getFeedPostId = (request: GetFeedPostRequest): string => {
  if (!request.id) {
    throw new ApplicationError(MISSING_FEED_ID_ERROR);
  }
  return request.id;
}
