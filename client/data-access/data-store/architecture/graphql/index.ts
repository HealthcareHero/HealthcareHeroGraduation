import { useState, useEffect, useCallback } from 'react'
import { request } from 'graphql-request'
import { UseGraphQLRequest, UseGraphQLResponse, UseGraphQLVariables } from './index.type'

export const useGraphQL = (url: string, graphqlRequest: UseGraphQLRequest, variables?: UseGraphQLVariables, immediate = true): UseGraphQLResponse => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(async (variables?: UseGraphQLVariables) => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const response = await request(url, graphqlRequest, variables);
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute(variables);
    }
  }, [execute]);

  return {
    execute,
    data,
    isLoading: loading,
    isError: error
  };
};
