import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export const getNow = (): Date => {
  return dayjs().toDate();
}

export const getDurationFromNow = (timestamp: string): string => {
  return dayjs(timestamp).fromNow()
}