import { Routes } from './routes.type'
import { bernard, jeanie, priyanka, yikSiong } from 'client/modules/profile/common/models'

const profileRouteRoot = "/profile";

export const routes: Routes = {
  home: {
    path: "/",
    navTabTitle: "Home",
    pageTitle: "Healthcare Heroes Graduation",
    pageDescription: "Happy Graduation! Thank you healthcare heroes!",
  },
  feed: {
    path: "/feed",
    pageTitle: "Feed",
    pageDescription: "Write a comment and share!",
  },
  profiles: {
    path: profileRouteRoot,
    navTabTitle: "Profiles",
    bernard: {
      path: `${profileRouteRoot}/${bernard.pagePathSuffix}`,
      pageTitle: bernard.pageTitle,
      pageDescription: bernard.pageDescription,
    },
    jeanie: {
      path: `${profileRouteRoot}/${jeanie.pagePathSuffix}`,
      pageTitle: jeanie.pageTitle,
      pageDescription: jeanie.pageDescription,
    },
    priyanka: {
      path: `${profileRouteRoot}/${priyanka.pagePathSuffix}`,
      pageTitle: priyanka.pageTitle,
      pageDescription: priyanka.pageDescription,
    },
    yikSiong: {
      path: `${profileRouteRoot}/${yikSiong.pagePathSuffix}`,
      pageTitle: yikSiong.pageTitle,
      pageDescription: yikSiong.pageDescription,
    },
  },
};
