import { ErrorFeedback } from 'server/errors/BaseError/index.type'

const ENVIRONMENT_CONFIG_ERROR_MESSAGE = "Internal Sever Error"

export const ENVIRONMENT_VARIABLE_NOT_FOUND_ERROR: ErrorFeedback = {
  code: "SENV001",
  technicalMessage: "Unable to find environment variable or key is incorrect",
  message: ENVIRONMENT_CONFIG_ERROR_MESSAGE,
}

export const ENVIRONMENT_VARIABLE_PARSE_JSON_ERROR: ErrorFeedback = {
  code: "SENV002",
  technicalMessage: "Unable to parse environment to json string",
  message: ENVIRONMENT_CONFIG_ERROR_MESSAGE,
}

export const ENVIRONMENT_VARIABLE_PARSE_BASE64_JSON_ERROR: ErrorFeedback = {
  code: "SENV002",
  technicalMessage: "Unable to parse environment containing base64-encoded json string into json",
  message: ENVIRONMENT_CONFIG_ERROR_MESSAGE,
}