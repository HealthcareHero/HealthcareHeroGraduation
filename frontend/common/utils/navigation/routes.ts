import { Routes } from "./routes.type";

const profileRouteRoot = "/profile";

const getProfileRouteTitle = (title: string): string => {
  return `${title} | Profile`;
};

export const routes: Routes = {
  home: {
    path: "/",
    navTabTitle: "Home",
    pageTitle: "Healthcare Heroes Graduation",
    pageDescription: "Happy Graduation! Thank you healthcare heroes!",
  },
  profiles: {
    path: profileRouteRoot,
    navTabTitle: "Profiles",
    bernard: {
      path: `${profileRouteRoot}/bernard`,
      pageTitle: getProfileRouteTitle("Bernard"),
      pageDescription: "A Hero",
    },
    jeanie: {
      path: `${profileRouteRoot}/jeanie`,
      pageTitle: getProfileRouteTitle("Jeanie"),
      pageDescription: "A Hero",
    },
    yanka: {
      path: `${profileRouteRoot}/yanka`,
      pageTitle: getProfileRouteTitle("Yanka"),
      pageDescription: "A Hero",
    },
    yikSiong: {
      path: `${profileRouteRoot}/yik-siong`,
      pageTitle: getProfileRouteTitle("Yik Siong"),
      pageDescription: "A Hero",
    },
  },
};
