import { FeedPost } from 'server/data-access/firebase/common/types/feeds/index.type'

export type GetFeedPosts = () => GetFeedPostsResponse;  

export type GetFeedPostsResponse = FeedPost[];
