import { gql } from "graphql-request";
import { useGraphQL } from "api/data-access/architecture/graphql";
import { dragon3, dragon4, dragon5 } from '../mock'
import { Dragon } from '../mock.type'
import { UseDragonsResponse } from './index.type'

const URL = "https://api.spacex.land/graphql/";

const query = gql`
  {
    dragons(limit: 10) {
      id
      name
      description
      wikipedia
      type
      active
      crew_capacity
      first_flight
    }
  }
`;

const mapData = (data) => {
  if (data) {
    // data.dragons.push(dragon3);
    const result = data.dragons.map((x) => {
      return <Dragon>{
        id: x.id,
        author: x.name,
        recipient: "ALL",
        message: x.description,
        media: [],
        tags: [x.type],
        enableComment: x.active,
        likeCount: x.crew_capacity,
        timestamp: x.first_flight,
      };
    });
    return [...result, dragon3, dragon4, dragon5];
  }
  return null;
};

export const useDragons = (): UseDragonsResponse => {
  const { data, isLoading, isError } = useGraphQL(URL, query);
  return {
    data: mapData(data),
    isLoading: isLoading,
    isError: isError,
  };
};
