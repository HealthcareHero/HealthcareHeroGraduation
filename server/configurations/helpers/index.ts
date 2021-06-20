import { ApplicationError } from 'server/errors/ApplicationError'
import {
  ENVIRONMENT_VARIABLE_NOT_FOUND_ERROR,
  ENVIRONMENT_VARIABLE_PARSE_JSON_ERROR
} from 'server/errors/ApplicationError/constants/configuration'

export const getEnvValue = (key: string): string => {
  try {
    return process.env[key];
  } catch (error) {
    throw new ApplicationError(ENVIRONMENT_VARIABLE_NOT_FOUND_ERROR, error);
  }
}

export const parseEnvJson = (key: string): any => {
  const jsonString = getEnvValue(key);
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    throw new ApplicationError(ENVIRONMENT_VARIABLE_PARSE_JSON_ERROR, error)
  }
}