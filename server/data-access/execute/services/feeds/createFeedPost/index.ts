import { CreateFeedPostRequest, CreateFeedPostResponse } from './index.type'

export const createFeedPost = ({ author, recipient, message, media, tags, enableComment }: CreateFeedPostRequest): CreateFeedPostResponse => {
  // console.log("IN SERVER HERE", args)
  return message; // TODO: Return ID
}
