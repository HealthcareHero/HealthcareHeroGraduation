import { CommonResponse } from '../../common/types/index.type'
import { UseGetFeedPostsResponse } from 'client/data-access/data-store/services/vercel/feeds/getFeedPosts/index.type'

export interface GetFeedPostsResponse extends UseGetFeedPostsResponse, CommonResponse { }
