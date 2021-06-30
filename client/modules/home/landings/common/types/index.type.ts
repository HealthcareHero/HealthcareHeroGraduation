import { FeedPost } from 'client/data-access/execute/feed/common/types/index.type'
import { CommonError } from 'client/common/errors/index.type'

export interface LandingProps {
  data: FeedPost[] | null;
  error: CommonError;
  isLoading: boolean;
}

export type FeedPostProps = FeedPost;
