import { gql } from 'graphql-request'
import { useGraphQL } from 'common/data-access/services/architecture/graphql'

const URL = "https://api.spacex.land/graphql/";

const DRAGONS = gql`
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
    return data.dragons.map(x => {
      return {
        id: x.id,
        author: x.name,
        message: x.description,
        media: [],
        tags: x.type? [x.type, "tag1", "tag2"] : [],
        commenting: x.active,
        likeCount: x.crew_capacity,
        timestamp: x.first_flight,
      }
    })
  }
  return null
}

export const useTestDragons = () => {
  const { data, isLoading, isError } = useGraphQL(URL, DRAGONS);
  return {
    data: mapData(data),
    isLoading: isLoading,
    isError: isError
  }; 
}