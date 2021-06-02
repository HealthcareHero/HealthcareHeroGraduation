import { CommonResponse } from '../../common/types/index.type'

export interface GetFeedPostsResponse extends CommonResponse {
  data: Data;
}

export interface Data {
  feedPosts: FeedDetail[] | null;
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
