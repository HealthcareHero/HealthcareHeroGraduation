import { ErrorFeedback } from 'server/errors/BaseError/index.type'

const COMMON_ERROR_MESSAGE = "Unable to retrieve information. Please try again later."

export const FAILURE_TO_RETRIEVE_FEEDS_ERROR: ErrorFeedback = {
  code: "SFEED001",
  technicalMessage: "An error occurred when retrieving feeds",
  message: COMMON_ERROR_MESSAGE,
}

export const MISSING_FEED_ID_ERROR: ErrorFeedback = {
  code: "SFEED002",
  technicalMessage: "Feed id is missing",
  message: COMMON_ERROR_MESSAGE,
}
