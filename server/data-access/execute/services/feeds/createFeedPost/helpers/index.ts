import { ApplicationError } from 'server/errors/ApplicationError'
import {
  SUBMISSION_MISSING_MESSAGE_ERROR,
  SUBMISSION_MESSAGE_LENGTH_EXCEEDED_ERROR,
  SUBMISSION_MISSING_RECIPIENT_ERROR,
  SUBMISSION_TAG_ARRAY_LENGTH_EXCEEDED_ERROR,
  SUBMISSION_TAG_LENGTH_EXCEEDED_ERROR,
  SUBMISSION_FILE_ARRAY_LENGTH_EXCEEDED_ERROR,
} from 'server/errors/ApplicationError/constants/submission'
import {
  FEED_POST_MESSAGE_MAX_LENGTH,
  TAG_LIST_MAX_LENGTH,
  TAG_MAX_LENGTH,
  FEED_POST_FILE_LIST_MAX_LENGTH,
} from 'common/constants'

export const getAuthor = (author: string): string => {
  return author ? author : "Anonymous"
}

export const getRecipient = (recipient: string): string => {
  if (!recipient)
    throw new ApplicationError(SUBMISSION_MISSING_RECIPIENT_ERROR);

  return recipient;
}

export const getMessage = (message: string): string => {
  if (!message)
    throw new ApplicationError(SUBMISSION_MISSING_MESSAGE_ERROR);

  if (message.length > FEED_POST_MESSAGE_MAX_LENGTH)
    throw new ApplicationError(SUBMISSION_MESSAGE_LENGTH_EXCEEDED_ERROR);

  return message;
}

export const getTags = (tags?: string[] | null): string[] => {
  if (tags?.length > TAG_LIST_MAX_LENGTH)
    throw new ApplicationError(SUBMISSION_TAG_ARRAY_LENGTH_EXCEEDED_ERROR);

  tags?.forEach(tag => {
    if (tag.length > TAG_MAX_LENGTH)
      throw new ApplicationError(SUBMISSION_TAG_LENGTH_EXCEEDED_ERROR)
  });

  return tags ?? [] as string[];
}

export const getMedia = (media?: string[] | null): string[] => {
  if (media?.length > FEED_POST_FILE_LIST_MAX_LENGTH)
    throw new ApplicationError(SUBMISSION_FILE_ARRAY_LENGTH_EXCEEDED_ERROR);

  return media ?? [] as string[];
}