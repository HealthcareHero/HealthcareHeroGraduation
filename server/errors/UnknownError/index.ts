import { BaseError } from '../BaseError'
import { DEFAULT } from './constants'

export class UnknownError extends BaseError {
  constructor(originalError?: any) {
    super(DEFAULT.code, DEFAULT.technicalMessage, DEFAULT.message, false, originalError);
  }
}
