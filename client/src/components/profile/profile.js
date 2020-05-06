import { path } from '../../utilities/paths';

export const profile = [
  {
    name: "Bernard",
    path: path.profile.bernard,
    img: require('../../assets/img/profile-avatar/avatar_bernard.png'),
    component: require('./heroes/bernard').default
  },
  {
    name: "Yanka",
    path: path.profile.yanka,
    img: require('../../assets/img/profile-avatar/avatar_yanka.png'),
    component: require('./heroes/yanka').default
  },
  {
    name: "Yik Siong",
    path: path.profile.yiksiong,
    img: require('../../assets/img/profile-avatar/avatar_yiksiong.png'),
    component: require('./heroes/yik-siong').default
  }
];