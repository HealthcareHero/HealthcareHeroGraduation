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
  if (id===dragon3.id)
    return dragon3;
  if (id===dragon4.id)
    return dragon4;
  if (id===dragon5.id)
    return dragon5;

  if (data?.dragon) {
    return {
      id: data.dragon.id,
      author: data.dragon.name,
      recipient: "ALL",
      message: data.dragon.description,
      media: [],
      tags: [data.dragon.type],
      enableComment: data.dragon.active,
      comments: [],
      likeCount: data.dragon.crew_capacity,
      timestamp: data.dragon.first_flight,
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
