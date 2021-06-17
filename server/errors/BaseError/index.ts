import { ApolloError } from 'apollo-server-errors';
import { ERROR_PROPERTY } from './constants'

export class BaseError extends ApolloError {
  constructor(code: string, technicalMessage: string, message: string, isCustomError = true) {
    super(message, code);

    Object.defineProperty(this, ERROR_PROPERTY.isCustomError, { value: isCustomError });
    Object.defineProperty(this, ERROR_PROPERTY.technicalMessage, { value: technicalMessage });
  }
}
