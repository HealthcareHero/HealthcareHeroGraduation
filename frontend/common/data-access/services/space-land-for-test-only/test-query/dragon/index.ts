import { gql } from "graphql-request";
import { useGraphQL } from "common/data-access/services/architecture/graphql";
import { QueryVariables } from './index.type'

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

// const mapData = (data) => {
//   if (data) {
//     const result = data.dragon.map((x) => {
//       return {
//         id: x.id,
//         author: x.name,
//         message: x.description,
//         media: [],
//         tags: [x.type],
//         commenting: x.active,
//         likeCount: x.crew_capacity,
//         timestamp: x.first_flight,
//       };
//     });
//     return [...result, dragon3, dragon4, dragon5];
//   }
//   return null;
// };

export const useTestDragon = (id: string) => {
  const variables: QueryVariables = {
    id
  };

  const { data, isLoading, isError } = useGraphQL(URL, query, variables);
  return {
    data: (data),
    isLoading: isLoading,
    isError: isError,
  };
};

//========================================================================================

const dragon3 = {
  id: 3,
  author: "Dragon 3",
  message: "This dragon has 1 image",
  media: [
    "https://www.nme.com/wp-content/uploads/2021/03/Genshin-Impact-miHoYo.jpg",
  ],
  tags: ["#Tag1", "#Tag2"],
  commenting: true,
  likeCount: 25,
  timestamp: "",
};

const dragon4 = {
  id: 4,
  author: "Dragon 4",
  message: "This dragon has 2 images",
  media: [
    "https://blog.playstation.com/tachyon/2020/11/Featured-Image-Genshin-Impact-update-out-tomorrow.jpg?fit=1024,720",
    "https://console.kr-asia.com/wp-content/uploads/2020/10/WechatIMG3274.png",
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  commenting: true,
  likeCount: 25,
  timestamp: "",
};

const dragon5 = {
  id: 5,
  author: "Dragon 5",
  message: "This dragon has a vertically long image",
  media: [
    "https://i.pinimg.com/236x/f6/16/d0/f616d044c7937dde2e8ec2b4f3e6f79c--france-travel-winding-road.jpg"
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  commenting: true,
  likeCount: 25,
  timestamp: "",
};