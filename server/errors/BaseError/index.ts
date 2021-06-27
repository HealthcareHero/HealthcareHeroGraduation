import { ApolloError } from 'apollo-server-errors';
import { ERROR_PROPERTY } from './constants'
import { logger } from 'server/loggers'

export class BaseError extends ApolloError {
  constructor(code: string, technicalMessage: string, message: string, isCustomError = true, originalError?: any) {
    super(message, code);

    Object.defineProperty(this, ERROR_PROPERTY.isCustomError, { value: isCustomError });
    Object.defineProperty(this, ERROR_PROPERTY.technicalMessage, { value: technicalMessage });

    logger.error(`[Original Error] ${originalError}`);
  }

  public toString = (): string => {
    return `[${this.code}] ${this.technicalMessage}`;
  }
}
