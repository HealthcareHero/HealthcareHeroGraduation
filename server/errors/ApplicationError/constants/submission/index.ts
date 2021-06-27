import { ErrorFeedback } from 'server/errors/BaseError/index.type'

const COMMON_ERROR_MESSAGE = "Unable to submit. Please try again later."

export const SUBMISSION_UPLOAD_MEDIA_ERROR: ErrorFeedback = {
  code: "SSUBM001",
  technicalMessage: "An error occurred when uploading image",
  message: COMMON_ERROR_MESSAGE,
}
