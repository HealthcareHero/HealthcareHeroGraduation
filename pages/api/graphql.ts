import { ApolloServer } from 'apollo-server-micro'
import { mergedSchema } from 'server'

// const API_PATH = "http://localhost:3000/api/graphql";
const API_PATH = "https://healthcare-hero-graduation-9e7ayjnx9-healthcarehero.vercel.app/api/graphql";

const apolloServer = new ApolloServer({ schema: mergedSchema, playground: true, debug: true });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: API_PATH });
