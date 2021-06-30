import { Logger, LogInfo, LogError } from './index.type'

const info: LogInfo = (message) => {
  console.log(`[INFO] ${message}`);
}

const error: LogError = (error) => {
  console.log(`[ERROR] ${error}`)
}

export const logger: Logger = {
  info,
  error
}
