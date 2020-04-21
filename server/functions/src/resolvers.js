const { 
	createFeedPost,
	createComment, 
	getFeedPost,
	getAllFeedPosts,
	incrementLike,
	decrementLike
} = require('./implementations');

const resolvers = {
	Query: {
		feedPost: async (_, { id }) => {
			return getFeedPost(id);
		},

		feedPosts: async () => {
			return getAllFeedPosts();
		}
	},

	Mutation: {
		addFeedPost: async (_, { author, message, media, tags, commenting }) => {
			let id = createFeedPost(author, message, media, tags, commenting);
			return id;
		},
		addComment: async(_, { feedPostId, author, message }) => {
			let id = createComment(feedPostId, author, message);
			return id;
		},
		incrementLike: async(_, { feedPostId }) => {
			return incrementLike(feedPostId);
		},
		decrementLike: async(_, { feedPostId }) => {
			return decrementLike(feedPostId);
		}
	}
};

module.exports = resolvers;