import { BaseError } from '../BaseError'
import { ErrorFeedback } from '../BaseError/index.type'

export class ApplicationError extends BaseError {
  constructor(error: ErrorFeedback, originalError?: any) {
    super(error.code, error.technicalMessage, error.message, true, originalError);
  }
}
