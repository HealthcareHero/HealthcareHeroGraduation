import { ErrorFeedback } from 'server/errors/BaseError/index.type'

export const APOLLO_ERROR_CODES = {
  GRAPHQL_PARSE_FAILED: "GRAPHQL_PARSE_FAILED",
  GRAPHQL_VALIDATION_FAILED: "GRAPHQL_VALIDATION_FAILED",
  BAD_USER_INPUT: "BAD_USER_INPUT",
  UNAUTHENTICATED: "UNAUTHENTICATED",
  FORBIDDEN: "FORBIDDEN",
  PERSISTED_QUERY_NOT_FOUND: "PERSISTED_QUERY_NOT_FOUND",
  PERSISTED_QUERY_NOT_SUPPORTED: "PERSISTED_QUERY_NOT_SUPPORTED",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR"
}

export const GRAPHQL_PARSE_FAILED: ErrorFeedback = {
  code: "SSYS001",
  technicalMessage: `The GraphQL operation string contains a syntax error. (ApolloErrorCode: ${APOLLO_ERROR_CODES.GRAPHQL_PARSE_FAILED})`,
  message: "There may be incorrect information in your submission. Please try again.",
}

export const GRAPHQL_VALIDATION_FAILED: ErrorFeedback = {
  code: "SSYS002",
  technicalMessage: `The GraphQL operation is not valid against the server's schema. (ApolloErrorCode: ${APOLLO_ERROR_CODES.GRAPHQL_VALIDATION_FAILED})`,
  message: "There may be incorrect information in your submission. Please try again.",
}

export const BAD_USER_INPUT: ErrorFeedback = {
  code: "SSYS003",
  technicalMessage: `The GraphQL operation includes an invalid value for a field argument. (ApolloErrorCode: ${APOLLO_ERROR_CODES.BAD_USER_INPUT})`,
  message: "There may be incorrect information in your submission. Please try again.",
}
