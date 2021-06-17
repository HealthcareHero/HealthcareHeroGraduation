import { CommonError } from 'client/data-access/common/errors/index.type'
import { UNKNOWN_ERROR } from '../../errors/constants'

export const mapError = (response: any): CommonError => {
  const error = response?.response?.errors[0];
  if (error?.extensions?.code && error?.message) {
    return {
      code: error.extensions.code,
      message: error.message
    };
  }
  return UNKNOWN_ERROR;
}
