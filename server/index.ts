import { resolvers } from 'server/resolvers'
import { makeExecutableSchema } from 'apollo-server-micro'

import { Query } from './schemas/index.graphql'
import { FeedPost } from './schemas/feed.graphql'
import { Comment } from './schemas/comment.graphql'

export const mergedSchema = makeExecutableSchema({
  typeDefs: [ Query, FeedPost, Comment ],
  resolvers: resolvers,
});
