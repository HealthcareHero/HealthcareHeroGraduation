import { message } from 'antd';
import { SHARE_SUCCESS_MESSAGE, SHARE_ERROR_MESSAGE } from '../constants'

export const enableMediaVisualViewer = (media: string[] | null): boolean => {
  return (media?.length > 0);
}

export const getShareUrl = (): string => {
  return "https://www.google.com.sg"
}

export const onShareSuccess = (): void => {
  message.success(SHARE_SUCCESS_MESSAGE);
}

export const onShareError = (): void => {
  message.error(SHARE_ERROR_MESSAGE)
}
