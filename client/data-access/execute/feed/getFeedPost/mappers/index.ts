import { GraphQLResponseData } from 'client/data-access/common/graphql/index.type'
import { Data } from '../index.type'

export const mapResponseData = (data: GraphQLResponseData): Data => {
  return data?.feedPost;
}
