import { GetComments, GetCommentsRequest, GetCommentsResponse } from './index.type'

export const getComments: GetComments = (request: GetCommentsRequest): GetCommentsResponse => {
  return [{
    author: "Myunfa",
    message: "This dragon has 1 image",
    timestamp: "",
  }];
};
