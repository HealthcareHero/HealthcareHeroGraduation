import { useState, useEffect } from 'react'
import { request } from 'graphql-request'
import { RequestDocument } from 'graphql-request/dist/types'
import { UseGraphQLResponse } from './index.type'

export const useGraphQL = (url: string, graphqlRequest: RequestDocument): UseGraphQLResponse => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      request(url, graphqlRequest).then((data) => {
        setData(data);
      });
    } catch (error) {
      setError(error);
    }
  }, [data == true, error == false]);
  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
};
