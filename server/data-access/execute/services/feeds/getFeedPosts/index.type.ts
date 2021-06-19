import { FeedPost } from 'server/data-access/execute/common/types/feeds/index.type'

export type GetFeedPosts = () => GetFeedPostsResponse;  

export type GetFeedPostsResponse = FeedPost[];
