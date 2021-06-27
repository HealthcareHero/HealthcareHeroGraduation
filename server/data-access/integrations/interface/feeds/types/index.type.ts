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

export interface FeedPost extends NewFeedPost {
  id: string;
}

export interface ExecuteCreateFeedPostResult {
  id: string;
}

export interface ExecuteGetFeedPostsResult {
  feedPosts: FeedPost[] | null;
}
