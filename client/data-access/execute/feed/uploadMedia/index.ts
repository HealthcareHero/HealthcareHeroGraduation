import { gql } from 'graphql-request'
import { useGraphQL } from 'client/data-access/common/graphql'
import { UseUploadMediaRequest, UseUploadMediaResponse } from './index.type'
import { mapResponseData } from './mappers'

const mutation = gql`
  mutation uploadMedia($base64String: String!) {
    uploadMedia (
      base64String: $base64String
    )
  }
`;

export const useUploadMedia = (request: UseUploadMediaRequest): UseUploadMediaResponse => {
  return useGraphQL({
    immediate: false,
    graphqlRequest: mutation,
    graphqlVariables: request, 
    mapResponseData
  });
};
