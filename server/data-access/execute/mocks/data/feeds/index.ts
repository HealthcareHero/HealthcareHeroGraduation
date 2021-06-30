import { FeedPost } from 'server/data-access/execute/common/types/feeds/index.type'

import {
  comment1,
  comment2,
  comment3,
  comment4,
  comment5,
  comment6,
  comment7,
  comment8
} from '../comments'

export const feed1 = <FeedPost>{
  id: "feed1",
  author: "Myunfa",
  recipient: "BERNARD",
  message: "This dragon has 1 image",
  media: [
    "https://www.nme.com/wp-content/uploads/2021/03/Genshin-Impact-miHoYo.jpg",
  ],
  tags: ["#Tag1", "#Tag2"],
  enableComment: true,
  comments: [comment1, comment2],
  likeCount: 25,
  timestamp: "",
};

export const feed2 = <FeedPost>{
  id: "feed2",
  author: "Azami",
  recipient: "JEANIE",
  message: "This dragon has 2 images and 8 comments",
  media: [
    "https://blog.playstation.com/tachyon/2020/11/Featured-Image-Genshin-Impact-update-out-tomorrow.jpg?fit=1024,720",
    "https://console.kr-asia.com/wp-content/uploads/2020/10/WechatIMG3274.png",
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: true,
  comments: [comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8],
  likeCount: 25,
  timestamp: "",
};

export const feed3 = <FeedPost>{
  id: "feed3",
  author: "Hismena",
  recipient: "ALL",
  message: "This dragon has a vertically long image and disable comments",
  media: [
    "https://i.pinimg.com/236x/f6/16/d0/f616d044c7937dde2e8ec2b4f3e6f79c--france-travel-winding-road.jpg"
  ],
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: false,
  comments: null,
  likeCount: 25,
  timestamp: "",
};

export const feed4 = <FeedPost>{
  id: "feed4",
  author: "Dunarith",
  recipient: "ALL",
  message: "A young beast who provides memorial services for the families of the recently departed. It seems he is able to understand the will of the bird known as Bran. They travel throughout the lands as partners. Though he takes battle seriously, unlike other beastfolk he absolutely refuses to use his monster form for some reason.",
  media: null,
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: false,
  comments: null,
  likeCount: 25,
  timestamp: "",
};

export const feed5 = <FeedPost>{
  id: "feed5",
  author: "Ilulu",
  recipient: "ALL",
  message: "A girl with a mysterious aura wielding a huge sickle. Beyond her innocent looks she also possesses a rather childish nature. She tends to disturb the people around her with her erratic behavior. Her sickle seems to have some kind of special power that can cut through something very important to people. It is believed that Ilulu comes from some otherworldly place.",
  media: null,
  tags: ["#Tag1", "#Tag2", "#aVeryLongTag123456789012345"],
  enableComment: true,
  comments: [],
  likeCount: 25,
  timestamp: "",
};
