import { ErrorFeedback } from 'server/errors/BaseError/index.type'

export const GRAPHQL_VALIDATION_FAILED: ErrorFeedback = {
  code: "SSYS001",
  technicalMessage: "The GraphQL operation is not valid against the server's schema.",
  message: "There may be incorrect information in your submission. Please try again.",
}

export const BAD_USER_INPUT: ErrorFeedback = {
  code: "SSYS002",
  technicalMessage: "The GraphQL operation includes an invalid value for a field argument.",
  message: "There may be incorrect information in your submission. Please try again.",
}
