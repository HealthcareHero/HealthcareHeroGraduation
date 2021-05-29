import { FeedDetailComment } from '../types/index.type'

export const displayComments = (enableComment: boolean, comments: FeedDetailComment[] | null): boolean => {
  return (enableComment && comments?.length > 0);
}
