import { CommonError } from './index.type'

export const getDisplayMessage = (error: CommonError): string => {
  return `${error.message} (${error.code})`;
}
