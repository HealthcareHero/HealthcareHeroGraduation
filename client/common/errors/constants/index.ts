import { CommonError } from '../index.type'

const UNKNOWN_ERROR_MESSAGE = "An unknown error occurred."

/** Generic unknwon error **/
export const UNKNOWN_ERROR: CommonError = {
  code: "CUKN001",
  message: UNKNOWN_ERROR_MESSAGE
}

/** Unknown error occurred during API call **/
export const UNKNOWN_API_ERROR: CommonError = {
  code: "CUKN002",
  message: UNKNOWN_ERROR_MESSAGE
}

/** Unknown error occurred during API call **/
export const UNKNOWN_UPLOAD_MEDIA_ERROR: CommonError = {
  code: "CUKN003",
  message: "Unable to upload media. Please try again later."
}
