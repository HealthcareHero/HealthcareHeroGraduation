import { FeedPost } from 'server/data-access/execute/common/types/feeds/index.type'

export interface GetFeedPostRequest {
  id: string;
};

export type GetFeedPostResponse = FeedPost;
