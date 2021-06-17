import { ValidationError, UserInputError } from 'apollo-server-micro'
import { GraphQLError } from 'graphql'
import { ERROR_PROPERTY } from './BaseError/constants'
import { UnknownError } from './UnknownError'
import { SystemError } from './SystemError'
import { BAD_USER_INPUT, GRAPHQL_VALIDATION_FAILED } from './SystemError/constants'

const getSystemError = (error: GraphQLError) => {
  if (error.originalError instanceof ValidationError) {
    return new SystemError(GRAPHQL_VALIDATION_FAILED);
  }
  else if (error.originalError instanceof UserInputError) {
    return new SystemError(BAD_USER_INPUT);
  }
  else {
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