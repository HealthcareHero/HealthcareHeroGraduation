export interface CreateFeedPostRequest {
  author: string;
  recipient: string;
  message: string;
  media?: string[] | null;
  tags?: string[] | null;
  enableComment: boolean;
}

export type CreateFeedPostResponse = String | null;

export interface NewFeedPost extends CreateFeedPostRequest {
  likeCount: number;
  timestamp: Date;
}
