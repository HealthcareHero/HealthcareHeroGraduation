import { GetCommentsRequest, GetCommentsResponse } from 'server/data-access/execute/services/comments/getComments/index.type'

export type { GetCommentsRequest };

export type GetCommentsResult = GetCommentsResponse;

export interface GetCommentsParent {
  id: string;
}
