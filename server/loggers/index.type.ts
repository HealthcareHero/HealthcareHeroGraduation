export interface Logger {
  info: LogInfo
  error: LogError
}

export type LogInfo = (message: string) => void;
export type LogError = (error: any) => void;