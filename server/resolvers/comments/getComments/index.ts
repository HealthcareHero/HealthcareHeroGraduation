import { GetCommentsArgument } from './index.type'
import { Comment } from 'server/models/comments/index.type'
import { execute } from 'server/data-access/execute'
import { getComments as service} from 'server/data-access/execute/services/comments/getComments'
import { mock_getComments as mockService} from 'server/data-access/execute/mocks/services/comments/getComments'

export const getComments = async (parent: any, args: any): Promise<Comment[] | null> => {
  // const { feedPostId } = args as GetCommentsArgument;
  const { id } = parent;

  console.log("PARENT", parent)
  const feedPostId = id;
  const request = { feedPostId }
  const result = execute(service(request), mockService(request));
  console.log(result)

  return result;
}
