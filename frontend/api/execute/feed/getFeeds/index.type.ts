export interface GetFeedsResponse {
  data: FeedDetail[] | null;
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
  likeCount: number;
  timestamp: string;
}
