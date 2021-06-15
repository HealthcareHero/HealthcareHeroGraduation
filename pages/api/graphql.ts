import { ApolloServer } from 'apollo-server-micro'
import { schema } from 'server'

const API_PATH = '/api/graphql'

const apolloServer = new ApolloServer({
  schema: schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: API_PATH });
