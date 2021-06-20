import { ApolloServer } from 'apollo-server-micro'
import { API_URL } from 'common/constants'
import { schema } from 'server'
import { formatError } from 'server/errors'

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

export default apolloServer.createHandler({ path: API_URL });
