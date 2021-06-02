import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from 'path';
import { resolvers } from 'server/resolvers'
import { addResolversToSchema } from '@graphql-tools/schema';

const schema = loadSchemaSync(join('server/schemas/index.graphql'), {
  loaders: [
    new GraphQLFileLoader(),
  ]
});

export const mergedSchema = addResolversToSchema({ schema, resolvers });
