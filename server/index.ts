import { resolvers } from 'server/resolvers'
import { makeExecutableSchema } from 'apollo-server-micro'

import { Query, Mutation } from './schemas/index.graphql'
import { FeedPost, MediaFileInput } from './schemas/feed.graphql'
import { Comment } from './schemas/comment.graphql'

const types = [ FeedPost, Comment ];
const inputs = [ MediaFileInput ];

export const schema = makeExecutableSchema({
  typeDefs: [ Query, Mutation, ...types, ...inputs ],
  resolvers: resolvers,
});
