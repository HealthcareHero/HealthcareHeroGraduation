import { useState, useEffect, useCallback } from "react";
import { request } from "graphql-request";
import {
  GraphQLRequest,
  UseGraphQLRequest,
  UseGraphQLResponse,
  GraphQLVariables,
  GraphQLResponseData,
} from "./index.type";
import { CommonError } from "../../../common/errors/index.type";
import { API_URL } from "./constants";
import { mapError } from "./mappers";

export const useGraphQL = ({
  graphqlRequest,
  graphqlVariables: variables,
  immediate = true,
  mapResponseData: mapResponse = undefined,
}: UseGraphQLRequest): UseGraphQLResponse => {
  const [data, setData] = useState<GraphQLResponseData>(null);
  const [loading, setLoading] = useState<boolean>(null);
  const [error, setError] = useState<CommonError>(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  const execute = useCallback(async (variables?: GraphQLVariables) => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const response = await request(API_URL, graphqlRequest, variables);
      const responseData = mapResponse ? mapResponse?.(response) : response;
      setData(responseData);
      setLoading(false);
      return responseData;
    } catch (error) {
      setError(mapError(error));
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
    error,
    isLoading: loading,
  };
};
