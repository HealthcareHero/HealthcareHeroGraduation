import { FeedDetail  } from 'client/data-access/execute/feed/getFeedDetail/index.type'

export interface LandingProps {
  data: FeedDetail[] | null;
  isLoading: boolean;
  isError: boolean | null;
}

export type FeedPostProps = FeedDetail;
