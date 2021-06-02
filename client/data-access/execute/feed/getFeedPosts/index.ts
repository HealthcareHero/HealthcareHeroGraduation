import { GetFeedPostsResponse } from './index.type'
import { useGetFeedPosts as useApi } from 'client/data-access/data-store/services/vercel/feeds/getFeedPosts'
import { mapResponse } from './mappers'

export const useGetFeedPosts = (): GetFeedPostsResponse => {
  const response = useApi();
  return mapResponse(response);
};
