const { firestore, fieldValue } = require('../firestore');
const moment = require('moment');
const { 
	validateMessageAndMediaRequirement,
	validateMessage,
	validateTags,
	validateAuthor,
	validateFeedPost
} = require('./validation');

const createFeedPost = async (author="Guest", message, media, tags, commenting) => {
	const feedPost = { 
		commenting,
		likeCount: 0,
		timestamp: moment()
	};

	if (validateMessageAndMediaRequirement(message, media)) {
		if (message && validateMessage(message)) {
			feedPost.message = message;
		}

		if (media) {
			feedPost.media = media;
		}

		if (tags && validateTags(tags)) {
			feedPost.tags = tags;
		}

		if (author && validateAuthor(author)) {
			feedPost.author = author;
		}
	}

	const response = await firestore.collection('FeedPosts').add(Object.assign({}, feedPost));
	return response.id;
}


const createComment = async (feedPostId, author="Guest", message) => {
	const feedPost = await firestore.collection('FeedPosts').doc(feedPostId).get();

	if (validateFeedPost(feedPost) && validateMessage(message) && validateAuthor(author)) {
		const response = await firestore.collection('FeedPosts').doc(feedPostId).collection('Comments').add({
				author,
				message,
				timestamp: moment()
		});
		return response.id;
	}

	return null;
}


const getFeedPost = async (id) => {
	const feedPost = await firestore.collection('FeedPosts').doc(id).get();
	const data = feedPost.data();
	const result = {
		id: feedPost.id,
		author: data.author,
		message: data.message,
		media: data.media,
		tags: data.tags,
		comments: data.commenting ? getAllCommentsForFeedPost(id) : null,
		commenting: data.commenting,
		likeCount: data.likeCount,
		timestamp: moment(data.timestamp.toDate()).format()
	}

	return result;
}


const getAllFeedPosts = async () => {
	const feedPostList = await firestore.collection('FeedPosts').orderBy('timestamp', 'desc').get()
	return feedPostList.docs.map(feedPost => {
		const data = feedPost.data();
		return {
			id: feedPost.id,
			author: data.author,
			message: data.message,
			media: data.media,
			tags: data.tags,
			commenting: data.commenting,
			likeCount: data.likeCount,
			timestamp: moment(data.timestamp.toDate()).format()
		}
	})
}


const getAllCommentsForFeedPost = async (feedPostId) => {
	const commentList = await firestore.collection('FeedPosts').doc(feedPostId).collection('Comments').orderBy('timestamp', 'desc').get()
	return commentList.docs.map(comment => {
		const data = comment.data();
		return { 
			author: data.author,
			message: data.message,
			timestamp: moment(data.timestamp.toDate()).format()
		};
	});
}

const incrementLike = async (feedPostId) => {
	const response = await firestore.collection('FeedPosts').doc(feedPostId).update({likeCount: fieldValue.increment(1)});
	return true;
}

const decrementLike = async (feedPostId) => {
	const response = await firestore.collection('FeedPosts').doc(feedPostId).update({likeCount: fieldValue.increment(-1)});
	return true;
}

module.exports = {
	createFeedPost,
	createComment,
	getFeedPost,
	getAllFeedPosts,
	incrementLike,
	decrementLike
}