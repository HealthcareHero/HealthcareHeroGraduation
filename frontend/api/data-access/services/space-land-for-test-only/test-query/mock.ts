import { Dragon } from './mock.type'

export const dragon3 = <Dragon>{
  id: "3",
  author: "Dragon 3",
  recipient: "BERNARD",
  message: "This dragon has 1 image",
  media: [
    "https://www.nme.com/wp-content/uploads/2021/03/Genshin-Impact-miHoYo.jpg",
  ],
  tags: ["#Tag1", "#Tag2"],
  enableComment: true,
  likeCount: 25,
  timestamp: "",
};

export const dragon4 = <Dragon>{
  id: "4",
  author: "Dragon 4",
  recipient: "JEANIE",
  message: "This dragon has 2 images",
  media: [
    "https://blog.playstation.com/tachyon/2020/11/Featured-Image-Genshin-Impact-update-out-tomorrow.jpg?fit=1024,720",
    "https://console.kr-asia.com/wp-content/uploads/2020/10/WechatIMG3274.png",
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: true,
  likeCount: 25,
  timestamp: "",
};

export const dragon5 = <Dragon>{
  id: "5",
  author: "Dragon 5",
  recipient: "ALL",
  message: "This dragon has a vertically long image",
  media: [
    "https://i.pinimg.com/236x/f6/16/d0/f616d044c7937dde2e8ec2b4f3e6f79c--france-travel-winding-road.jpg"
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: true,
  likeCount: 25,
  timestamp: "",
};