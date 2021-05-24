import { useState, useEffect } from 'react'
import { request } from 'graphql-request'
import { UseGraphQLRequest, UseGraphQLResponse, UseGraphQLVariables } from './index.type'

export const useGraphQL = (url: string, graphqlRequest: UseGraphQLRequest, variables?: UseGraphQLVariables): UseGraphQLResponse => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      request(url, graphqlRequest, variables).then((data) => {
        setData(data);
      });
    } catch (error) {
      setError(error);
    }
  }, []);
  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
};
