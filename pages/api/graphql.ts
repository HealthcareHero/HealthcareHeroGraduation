import { ApolloServer } from 'apollo-server-micro'
import { mergedSchema } from 'server'

const API_PATH = '/api/graphql'
const apolloServer = new ApolloServer({
  schema: mergedSchema,
  playground: true,
  debug: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: API_PATH });
