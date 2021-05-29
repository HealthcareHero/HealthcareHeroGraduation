import { Dragon, Comment } from './mock.type'


export const rocket1 = <Comment>{
  author: "Klee",
  message: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
  timestamp: "2006-03-24",
}

export const rocket2 = <Comment>{
  author: "Ayaka",
  message: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
  timestamp: "2006-03-23",
}

export const rocket3 = <Comment>{
  author: "Keqing",
  message: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
  timestamp: "2006-03-22",
}

export const rocket4 = <Comment>{
  author: "Kazuha",
  message: "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
  timestamp: "2006-03-21",
}

export const dragon3 = <Dragon>{
  id: "dragon3",
  author: "Dragon 3",
  recipient: "BERNARD",
  message: "This dragon has 1 image",
  media: [
    "https://www.nme.com/wp-content/uploads/2021/03/Genshin-Impact-miHoYo.jpg",
  ],
  tags: ["#Tag1", "#Tag2"],
  enableComment: true,
  comments: [rocket1, rocket2],
  likeCount: 25,
  timestamp: "",
};

export const dragon4 = <Dragon>{
  id: "dragon4",
  author: "Dragon 4",
  recipient: "JEANIE",
  message: "This dragon has 2 images",
  media: [
    "https://blog.playstation.com/tachyon/2020/11/Featured-Image-Genshin-Impact-update-out-tomorrow.jpg?fit=1024,720",
    "https://console.kr-asia.com/wp-content/uploads/2020/10/WechatIMG3274.png",
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: true,
  comments: [rocket1, rocket2, rocket3, rocket4],
  likeCount: 25,
  timestamp: "",
};

export const dragon5 = <Dragon>{
  id: "dragon5",
  author: "Dragon 5",
  recipient: "ALL",
  message: "This dragon has a vertically long image",
  media: [
    "https://i.pinimg.com/236x/f6/16/d0/f616d044c7937dde2e8ec2b4f3e6f79c--france-travel-winding-road.jpg"
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: false,
  comments: null,
  likeCount: 25,
  timestamp: "",
};
