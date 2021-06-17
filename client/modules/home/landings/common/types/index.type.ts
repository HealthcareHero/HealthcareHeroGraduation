import { FeedPost  } from 'client/data-access/execute/feed/getFeedPost/index.type'

export interface LandingProps {
  data: FeedPost[] | null;
  error: boolean | null;
  isLoading: boolean;
}

export type FeedPostProps = FeedPost;
