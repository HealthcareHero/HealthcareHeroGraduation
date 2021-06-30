import { GetCommentsParent, GetCommentsRequest, GetCommentsResult } from './index.type'
import { execute } from 'server/data-access/execute'
import { getComments as service} from 'server/data-access/execute/services/comments/getComments'
import { mock_getComments as mockService} from 'server/data-access/execute/mocks/services/comments/getComments'

export const getComments = async (parent: any, args: any): Promise<GetCommentsResult> => {
  const { id } = parent as GetCommentsParent;
  const request: GetCommentsRequest = { feedPostId: id }
  const result = await execute<GetCommentsResult>(() => mockService(request), () => mockService(request));
  console.log(result)

  return result;
}
