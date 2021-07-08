import { FeedDetailComment } from 'client/modules/home/feed-detail/common/types/index.type'

export interface RightPanelProps {
  id: string;
  author: string;
  message: string;
  tags: string[] | null;
  enableComment: boolean;
  comments: FeedDetailComment[] 
  likeCount: number;
  timestamp: string;
}
