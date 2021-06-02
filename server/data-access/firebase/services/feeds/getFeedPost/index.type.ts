import { FeedPost } from 'server/data-access/firebase/common/types/feeds/index.type'

export type GetFeedPost = (req: GetFeedPostRequest) => GetFeedPostResponse;  

export interface GetFeedPostRequest {
  id: string;
};

export type GetFeedPostResponse = FeedPost;
