import { Comment } from 'server/data-access/firebase/common/types/comments/index.type'

export type GetComments = (req: GetCommentsRequest) => GetCommentsResponse;  

export interface GetCommentsRequest {
  feedPostId: string;
};

export type GetCommentsResponse = Comment[] | null;
