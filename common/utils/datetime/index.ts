import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export const getNow = (): Date => {
  return dayjs().toDate();
}

export const getDurationFromNow = (timestamp: Date): string => {
  return dayjs(timestamp).fromNow();
}