import { ErrorFeedback } from 'server/errors/BaseError/index.type'

export const DEFAULT: ErrorFeedback = {
  code: "SUKN001",
  technicalMessage: "An unknown error occurred.",
  message: "Our server is currently busy. Please try again later.",
}