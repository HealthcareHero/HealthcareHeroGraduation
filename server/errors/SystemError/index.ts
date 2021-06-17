import { BaseError } from '../BaseError'
import { ErrorFeedback } from '../BaseError/index.type'

export class SystemError extends BaseError {
  constructor(error: ErrorFeedback) {
    super(error.code, error.technicalMessage, error.message, false);
  }
}
