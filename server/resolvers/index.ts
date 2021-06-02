import { GraphqlResolver } from './index.type'
import { getFeedPost } from './feeds/getFeedPost'
import { getFeedPosts } from './feeds/getFeedPosts'
import { getComments } from './comments/getComments'

export const resolvers: GraphqlResolver = {
  Query: {
    feedPost: getFeedPost,
    feedPosts: getFeedPosts,
  },
};
