import { NextApiHandler } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { json } from 'micro'
import { API_URL, IMAGE_MAX_SIZE_IN_MB } from 'common/constants'
import { schema } from 'server'
import { formatError } from 'server/errors'

const raiseBodyLimit: (handler: NextApiHandler) => NextApiHandler = (
  handler
) => async (req, res) => {
  if (req.headers["content-type"] !== "application/json") {
    return handler(req, res)
  }
  await json(req, { limit: `${IMAGE_MAX_SIZE_IN_MB}mb` }) // This is the trick to raise body limit
  return handler(req, res)
}

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

export default raiseBodyLimit(
  apolloServer.createHandler({ path: API_URL })
);
