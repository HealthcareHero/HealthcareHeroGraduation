import { useCreateFeedPost as useApi } from 'client/data-access/data-store/services/vercel/feeds/createFeedPost'
import { CreateFeedPostRequest, CreateFeedPostResponse } from './index.type'

export const useCreateFeedPost = (request: CreateFeedPostRequest): CreateFeedPostResponse => {
  const response = useApi(request);
  return response;
};
