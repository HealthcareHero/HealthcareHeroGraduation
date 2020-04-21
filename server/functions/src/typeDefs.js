const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type FeedPost {
		id: String!
		author: String
		message: String
		media: [String!]
		tags: [String!]
		comments: [Comment!]
		commenting: Boolean!
		likeCount: Int!
		timestamp: String!
	}

	type Comment {
		author: String
		message: String!
		timestamp: String!
	}

	type Query {
		feedPost(id: String!): FeedPost
		feedPosts: [FeedPost!]
	}

	type Mutation {
		addFeedPost(author: String!, message: String, media: [String!], tags: [String!], commenting: Boolean!): String
		addComment(feedPostId: String!, author: String, message: String!): String
		incrementLike(feedPostId: String!): Boolean
		decrementLike(feedPostId: String!): Boolean
	}
`;

module.exports = typeDefs;