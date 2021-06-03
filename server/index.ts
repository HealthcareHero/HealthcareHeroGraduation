// import { loadSchemaSync } from '@graphql-tools/load';
// import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
// import { join } from 'path';
import { resolvers } from 'server/resolvers'
import { addResolversToSchema } from '@graphql-tools/schema';

import { Query } from './schemas/index.graphql'
import { FeedPost } from './schemas/feed.graphql'
import { Comment } from './schemas/comment.graphql'

import { makeExecutableSchema } from '@graphql-tools/schema';
export const mergedSchema = makeExecutableSchema({
  typeDefs: [ Query, FeedPost, Comment ],
  resolvers: resolvers,
});
// const schema = loadSchemaSync(join('server/schemas/index.graphql'), {
//   loaders: [
//     new GraphQLFileLoader(),
//   ]
// });

// export const mergedSchema = addResolversToSchema({ schema, resolvers });
