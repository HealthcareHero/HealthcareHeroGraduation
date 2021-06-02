import { Comment } from '../comments/index.type'

export interface FeedPost {
  id: string;
  author: string;
  recipient: string;
  message: string;
  media: string[] | null;
  tags: string[] | null;
  enableComment: boolean;
  comments: Comment[] | null;
  likeCount: number;
  timestamp: string;
}
