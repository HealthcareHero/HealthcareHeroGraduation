const errorCodes = {
	countExceed: {
		tags: "C1000"
	},
	empty: {
		author: "E1000",
		message: "E1001"
	},
	notFound: {
		feedPost: "F1000"
	},
	lengthExceed: {
		author: "L1000",
		message: "L1001",
		tag: "L1002"
	},
	requirementFailure: {
		messageMedia: "R1000"
	}
};

const errors = {
	authorLengthExceeded: {
		code: errorCodes.lengthExceed.author,
		message: "The length of the author has exceeded the upperlimit."
	},
	messageLengthExceeded: {
		code: errorCodes.lengthExceed.message,
		message: "The length of the message has exceeded the upperlimit."
	},
	tagLengthExceeded: {
		code: errorCodes.lengthExceed.tag,
		message: "The length of some tags has exceeded the upperlimit."
	},
	tagCountExceeded: {
		code: errorCodes.countExceed.tags,
		message: "Total number of tags has exceeded the upperlimit."
	},
	messageMediaRequirementFailure: {
		code: errorCodes.requirementFailure.messageMedia,
		message: "Both media and message fields are empty."
	},
	feedpostNotFound: {
		code: errorCodes.notFound.feedPost,
		message: "FeedPost not found."
	},
	authorEmpty: {
		code: errorCodes.empty.author,
		message: "Author should not be empty."
	},
	messageEmpty: {
		code: errorCodes.empty.message,
		message: "Message should not be empty."
	}
};

module.exports = errors;