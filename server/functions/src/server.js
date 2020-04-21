const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

function configureServer() {
	const app = express();
	app.use(cors());

	const server = new ApolloServer({
		typeDefs,
		resolvers
	});

	server.applyMiddleware({ app });

	return app;
}

module.exports = configureServer;