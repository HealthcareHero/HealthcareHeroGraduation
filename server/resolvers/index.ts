import { GraphqlResolver } from './index.type'
import { getFeedPost } from './feeds/getFeedPost'
import { getFeedPosts } from './feeds/getFeedPosts'
import { getComments } from './comments/getComments'
import { createFeedPost } from './feeds/createFeedPost'

export const resolvers: GraphqlResolver = {
  Query: {
    feedPost: getFeedPost,
    feedPosts: getFeedPosts,
  },
  Mutation: {
    createFeedPost
  }
};
