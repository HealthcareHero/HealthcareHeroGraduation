import { gql } from "graphql-request";
import { useGraphQL } from "api/data-access/architecture/graphql";
import { QueryVariables, UseDragonResponse } from './index.type'
import { Dragon } from '../mock.type'
import { dragon3, dragon4, dragon5 } from '../mock'

const URL = "https://api.spacex.land/graphql/";

const query = gql`
  query getDragon ($id: ID!) {
    dragon(id: $id) {
      id
      name
      description
      type
      active
      crew_capacity
      first_flight
    }
  }
`;

const mapData = (id, data): Dragon => {
  if (id==="dragon3")
    return dragon3;
  if (id==="dragon4")
    return dragon4;
  if (id==="dragon5")
    return dragon5;

  if (data) {
    return {
      id:data.id,
      author: data.name,
      recipient: "ALL",
      message: data.description,
      media: [],
      tags: [data.type],
      enableComment: data.active,
      likeCount: data.crew_capacity,
      timestamp: data.first_flight,
    };
  }

  return null;
};

export const useDragon = (id: string): UseDragonResponse => {
  const variables: QueryVariables = {
    id
  };

  const { data, isLoading, isError } = useGraphQL(URL, query, variables);
  return {
    data: mapData(id, data),
    isLoading: isLoading,
    isError: isError,
  };
};

//========================================================================================
