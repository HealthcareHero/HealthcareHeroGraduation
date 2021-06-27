export interface NewFeedPost {
  author: string;
  recipient: string;
  message: string;
  media?: string[] | null;
  tags?: string[] | null;
  enableComment: boolean;
  likeCount: number;
  timestamp: Date;
}

export interface ExecuteCreateFeedPostResult {
  id: string;
}