import { GraphQLError } from 'graphql'
import { ERROR_PROPERTY } from './BaseError/constants'
import { UnknownError } from './UnknownError'
import { SystemError } from './SystemError'
import { APOLLO_ERROR_CODES, GRAPHQL_PARSE_FAILED, GRAPHQL_VALIDATION_FAILED, BAD_USER_INPUT } from './SystemError/constants'

const getSystemError = (error: GraphQLError) => {
  console.log(error)
  switch (error.extensions?.code) {
    case APOLLO_ERROR_CODES.GRAPHQL_PARSE_FAILED:
      return new SystemError(GRAPHQL_PARSE_FAILED);
    case APOLLO_ERROR_CODES.GRAPHQL_VALIDATION_FAILED:
      return new SystemError(GRAPHQL_VALIDATION_FAILED);
    case APOLLO_ERROR_CODES.BAD_USER_INPUT:
      return new SystemError(BAD_USER_INPUT);
    default:
      return new UnknownError();
  }
}

export const formatError = (error: GraphQLError) => {
  let finalError = null;
  if (!error.extensions.isCustomError) {
    finalError = getSystemError(error);
  } else {
    finalError = error;
  }

  // log the error <--
  console.log(error)
  console.log(finalError)

  delete error.extensions[ERROR_PROPERTY.isCustomError];
  delete error.extensions[ERROR_PROPERTY.technicalMessage];

  return finalError;
}