import { CommonRequest, CommonResponse } from '../../common/types/index.type'
import { UseCreateFeedPostRequest, UseCreateFeedPostResponse } from 'client/data-access/data-store/services/vercel/feeds/createFeedPost/index.type'

export type CreateFeedPostRequest = CommonRequest & UseCreateFeedPostRequest 

export interface CreateFeedPostResponse extends UseCreateFeedPostResponse, CommonResponse { }
