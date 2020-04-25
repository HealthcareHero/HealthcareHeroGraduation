import { path } from '../../utilities/paths';

export const profile = [
  {
    name: "Bernard",
    path: path.profile.bernard,
    img: require('../../assets/img/avatar_bernard.png'),
    component: require('./heroes/Bernard').default
  },
  {
    name: "Yanka",
    path: path.profile.yanka,
    img: require('../../assets/img/avatar_yanka.png'),
    component: require('./heroes/Yanka').default
  },
  {
    name: "Yik Siong",
    path: path.profile.yiksiong,
    img: require('../../assets/img/avatar_yiksiong.png'),
    component: require('./heroes/YikSiong').default
  }
];