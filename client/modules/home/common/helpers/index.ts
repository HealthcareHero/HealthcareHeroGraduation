import { message } from 'antd'
import { routes } from 'client/common/utils/navigation/routes'
import { SHARE_DESCRIPTION, SHARE_SUCCESS_MESSAGE, SHARE_ERROR_MESSAGE } from '../constants'

export const enableMediaVisualViewer = (media: string[] | null): boolean => {
  return (media?.length > 0);
}

export const getFeedUrl = (id: string): string => {
  return `${routes.feed.path}?id=${id}`;
}

export const getShareDescription = (): string => {
  return SHARE_DESCRIPTION;
}

export const onShareSuccess = (): void => {
  message.success(SHARE_SUCCESS_MESSAGE);
}

export const onShareError = (): void => {
  message.error(SHARE_ERROR_MESSAGE)
}
