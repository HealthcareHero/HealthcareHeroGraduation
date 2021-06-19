import { CommonError } from 'client/common/errors/index.type'
import { UNKNOWN_API_ERROR } from 'client/common/errors/constants'

export const mapError = (response: any): CommonError => {
  try {
    const error = response?.response?.errors[0];
    if (error?.extensions?.code && error?.message) {
      return {
        code: error.extensions.code,
        message: error.message
      };
    }
    return UNKNOWN_API_ERROR;
  } catch {
    return UNKNOWN_API_ERROR;
  }
}
