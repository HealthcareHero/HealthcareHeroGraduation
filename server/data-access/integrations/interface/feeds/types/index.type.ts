export interface NewFeedPost {
  author: string;
  recipient: string;
  message: string;
  media?: string[] | null;
  tags?: string[] | null;
  enableComment: boolean;
  likeCount: number;
  timestamp: string;
}

export interface ExecuteCreateFeedPostResult {
  id: string;
}