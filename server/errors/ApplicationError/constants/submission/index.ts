import { ErrorFeedback } from 'server/errors/BaseError/index.type'

const COMMON_ERROR_MESSAGE = "Unable to submit. Please try again later."

export const SUBMISSION_UPLOAD_MEDIA_ERROR: ErrorFeedback = {
  code: "SSUBM001",
  technicalMessage: "An error occurred when uploading image",
  message: COMMON_ERROR_MESSAGE,
}

export const SUBMISSION_MISSING_MESSAGE_ERROR: ErrorFeedback = {
  code: "SSUBM002",
  technicalMessage: "Message is undefined, null or empty",
  message: COMMON_ERROR_MESSAGE,
}

export const SUBMISSION_MESSAGE_LENGTH_EXCEEDED_ERROR: ErrorFeedback = {
  code: "SSUBM003",
  technicalMessage: "Message length has exceeded the upper limit",
  message: COMMON_ERROR_MESSAGE,
}

export const SUBMISSION_MISSING_RECIPIENT_ERROR: ErrorFeedback = {
  code: "SSUBM004",
  technicalMessage: "Recipient is undefined, null or empty",
  message: COMMON_ERROR_MESSAGE,
}

export const SUBMISSION_TAG_ARRAY_LENGTH_EXCEEDED_ERROR: ErrorFeedback = {
  code: "SSUBM005",
  technicalMessage: "Total number of tags has exceeded the upper limit",
  message: COMMON_ERROR_MESSAGE,
}

export const SUBMISSION_TAG_LENGTH_EXCEEDED_ERROR: ErrorFeedback = {
  code: "SSUBM006",
  technicalMessage: "Total number of tags has exceeded the upper limit",
  message: COMMON_ERROR_MESSAGE,
}

export const SUBMISSION_FILE_ARRAY_LENGTH_EXCEEDED_ERROR: ErrorFeedback = {
  code: "SSUBM007",
  technicalMessage: "Total number of files has exceeded the upper limit",
  message: COMMON_ERROR_MESSAGE,
}

export const SUBMISSION_NEW_POST_CREATION_ERROR: ErrorFeedback = {
  code: "SSUBM008",
  technicalMessage: "Unable to save new post into database",
  message: COMMON_ERROR_MESSAGE,
}
