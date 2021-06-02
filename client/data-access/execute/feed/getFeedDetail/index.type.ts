export interface GetFeedDetailRequest {
  id: string,
}

export interface GetFeedDetailResponse {
  data: FeedDetail | null;
  isLoading: boolean;
  isError: boolean;
}

export interface FeedDetail {
  id: string;
  author: string;
  recipient: string;
  message: string | null;
  media: string[] | null;
  tags: string[] | null;
  enableComment: boolean,
  comments: Comment[] | null;
  likeCount: number;
  timestamp: string;
}

export interface Comment {
  author: string;
  message: string;
  timestamp: string;
}
