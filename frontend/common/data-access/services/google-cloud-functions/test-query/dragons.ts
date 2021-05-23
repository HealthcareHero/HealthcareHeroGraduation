import { gql } from "graphql-request";
import { useGraphQL } from "common/data-access/services/architecture/graphql";

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
    // data.dragons.push(dragon3);
    const result = data.dragons.map((x) => {
      return {
        id: x.id,
        author: x.name,
        message: x.description,
        media: [],
        tags: [x.type],
        commenting: x.active,
        likeCount: x.crew_capacity,
        timestamp: x.first_flight,
      };
    });
    return [...result, dragon3, dragon4];
  }
  return null;
};

export const useTestDragons = () => {
  const { data, isLoading, isError } = useGraphQL(URL, DRAGONS);
  return {
    data: mapData(data),
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
  id: 3,
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
