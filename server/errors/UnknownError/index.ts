import { BaseError } from '../BaseError'
import { DEFAULT } from './constants'

export class UnknownError extends BaseError {
  constructor() {
    super(DEFAULT.code, DEFAULT.technicalMessage, DEFAULT.message, false);
  }
}
