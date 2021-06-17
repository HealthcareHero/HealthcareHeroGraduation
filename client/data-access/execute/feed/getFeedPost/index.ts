import { API_URL } from 'client/data-access/common/constants'
import { gql } from 'graphql-request'
import { useGraphQL } from 'client/data-access/common/graphql'
import { UseGetFeedPostRequest, UseGetFeedPostResponse } from './index.type'

export const useGetFeedPost = (request: UseGetFeedPostRequest): UseGetFeedPostResponse => {
  return null;
};
