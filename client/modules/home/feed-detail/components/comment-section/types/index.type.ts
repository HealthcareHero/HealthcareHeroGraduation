import { FeedDetailComment } from 'client/modules/home/feed-detail/common/types/index.type'

export interface CommentSectionProps {
  enable: boolean;
  comments: FeedDetailComment[];
  showTopDivider: boolean;
}
