import { ApolloServer } from 'apollo-server-micro'
import { schema } from 'server'
import { formatError } from 'server/errors'

const API_PATH = '/api/graphql'

const apolloServer = new ApolloServer({
  schema: schema,
  formatError,
  plugins: [
    {
      requestDidStart(requestContext) {
        // console.log(requestContext) // Should import a logger from logger folder
        return {
          willSendResponse(requestContext) {
            // console.log(requestContext); // Should import a logger from logger folder
          }
        }
      }
    }
  ]
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: API_PATH });
