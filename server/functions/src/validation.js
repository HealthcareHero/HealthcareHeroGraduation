const errors = require('./errors');

const upperLimits = {
	authorLength: 30,
	messageLength: 2000,
	tagLength:75,
	tagCount: 10
}

const validateMessageAndMediaRequirement = (message, media) => {
	if (!message && !media) 
		throw errors.messageMediaRequirementFailure;
	return true;
}

const validateMessage = (message) => {
	if (message.length <= 0)
		throw errors.messageEmpty;
	if (message.length > upperLimits.messageLength)
		throw errors.messageLengthExceeded;
	return true;
}

const validateTags = (tags) => {
	if (tags.length > upperLimits.tagCount)
		throw errors.tagCountExceeded;
	
	tags.forEach(tag => {
		if (tag.length > upperLimits.tagLength)
			throw errors.tagLengthExceeded;
	})

	return true;
}

const validateAuthor = (author) => {
	if (author.length <= 0)
		throw errors.authorEmpty;
	if (author.length > upperLimits.authorLength)
		throw errors.authorLengthExceeded;
	return true;
}

const validateFeedPost = (feedPost) => {
	if (!feedPost.exists)
		throw errors.feedpostNotFound;
	return true;
}

module.exports = {
	validateMessageAndMediaRequirement,
	validateMessage,
	validateTags,
	validateAuthor,
	validateFeedPost
}