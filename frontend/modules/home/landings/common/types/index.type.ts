export interface LandingProps {
  data: FeedPostProps[];
  isLoading: boolean;
  isError: boolean;
}

export interface FeedPostProps {
  id: string;
  author: string;
  recipient: string;
  message: string | null;
  media: string[] | null;
  tags: string[] | null;
  enableComment: boolean;
  initialLikeCount: Int16Array;
  timestamp: string;
}
