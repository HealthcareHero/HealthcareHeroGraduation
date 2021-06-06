import { FormFieldNames } from './index.type'
import { FEED_POST_MESSAGE_MAX_LENGTH } from 'common/constants'

export const FORM_NAME = "new-feed-post-form";

export const formFieldNames: FormFieldNames = {
  author: "author",
  recipient: "recipient",
  media: "media",
  message: "message",
  tags: "tags",
  enableComment: "enableComment",
};

export const formFieldDefaultValues = {
  [formFieldNames.enableComment]: true,
};

export const formFieldRules = {
  [formFieldNames.recipient]: [
    { required: true, message: "Please select a recipient" },
  ],
  [formFieldNames.message]: [
    {
      required: true,
      message: "Please provide a message",
    },
    {
      max: FEED_POST_MESSAGE_MAX_LENGTH,
      message: `Message cannot be longer than ${FEED_POST_MESSAGE_MAX_LENGTH} characters`,
    },
  ],
};
