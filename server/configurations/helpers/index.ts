import { ApplicationError } from 'server/errors/ApplicationError'
import {
  ENVIRONMENT_VARIABLE_NOT_FOUND_ERROR,
  ENVIRONMENT_VARIABLE_PARSE_JSON_ERROR,
  ENVIRONMENT_VARIABLE_PARSE_BASE64_JSON_ERROR
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

export const parseEnvBase64Json = (key: string): any => {
   const base64JsonString = getEnvValue(key);
   const decodedString = Buffer.from(base64JsonString, "base64").toString("ascii");
   try {
     return JSON.parse(decodedString)
   } catch (error) {
     throw new ApplicationError(ENVIRONMENT_VARIABLE_PARSE_BASE64_JSON_ERROR, error)
   }
}
