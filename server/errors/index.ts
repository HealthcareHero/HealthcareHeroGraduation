import { GraphQLError } from 'graphql'
import { ERROR_PROPERTY } from './BaseError/constants'
import { UnknownError } from './UnknownError'
import { SystemError } from './SystemError'
import { APOLLO_ERROR_CODES, GRAPHQL_PARSE_FAILED, GRAPHQL_VALIDATION_FAILED, BAD_USER_INPUT } from './SystemError/constants'
import { logger } from 'server/loggers'

const getSystemError = (error: GraphQLError) => {
  console.log(error)
  switch (error.extensions?.code) {
    case APOLLO_ERROR_CODES.GRAPHQL_PARSE_FAILED:
      return new SystemError(GRAPHQL_PARSE_FAILED, error);
    case APOLLO_ERROR_CODES.GRAPHQL_VALIDATION_FAILED:
      return new SystemError(GRAPHQL_VALIDATION_FAILED, error);
    case APOLLO_ERROR_CODES.BAD_USER_INPUT:
      return new SystemError(BAD_USER_INPUT, error);
    default:
      return new UnknownError(error);
  }
}

export const formatError = (error: GraphQLError) => {
  let finalError = null;
  if (!error.extensions.isCustomError) {
    finalError = getSystemError(error);
  } else {
    finalError = error;
  }

  logger.error(finalError)

  delete finalError.extensions[ERROR_PROPERTY.isCustomError];
  delete finalError.extensions[ERROR_PROPERTY.technicalMessage];

  return finalError;
}