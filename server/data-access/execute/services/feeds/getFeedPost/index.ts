import { GetFeedPost, GetFeedPostRequest, GetFeedPostResponse } from './index.type'

export const getFeedPost: GetFeedPost = (request: GetFeedPostRequest): GetFeedPostResponse => {
  return {
    id: "fromservice",
    author: "Myunfa",
    recipient: "BERNARD",
    message: "This dragon has 1 image",
    media: [
      "https://www.nme.com/wp-content/uploads/2021/03/Genshin-Impact-miHoYo.jpg",
    ],
    tags: ["#Tag1", "#Tag2"],
    enableComment: true,
    comments: [],
    likeCount: 25,
    timestamp: "",
  };
};
