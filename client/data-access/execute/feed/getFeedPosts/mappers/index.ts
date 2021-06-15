import { UseGetFeedPostsResponse } from 'client/data-access/data-store/services/vercel/feeds/getFeedPosts/index.type'
import { GetFeedPostsResponse } from '../index.type'

export const mapResponse = (raw: UseGetFeedPostsResponse):GetFeedPostsResponse => {
  if (raw.isLoading) {
    return {
      ...raw,
      data: null,
    }
  }
  return {
    ...raw,
    // data: raw.data.feedPosts,
  };
}
