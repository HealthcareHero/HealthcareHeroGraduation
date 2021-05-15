import { Profile } from '../types/profile.type'
import { routes } from 'common/utils/navigation/routes'

const avatarBasePath = "/assets/img/profile-avatar";

export const bernard: Profile = {
  name: "Bernard",
  avatar: `${avatarBasePath}/avatar_bernard`,
  pagePath: routes.profiles.bernard.path,
  pageTitle: routes.profiles.bernard.pageTitle,
  pageDescription: routes.profiles.bernard.pageDescription
}

export const jeanie: Profile = {
  name: "Jeanie",
  avatar: `${avatarBasePath}/avatar_jeanie`,
  pagePath: routes.profiles.jeanie.path,
  pageTitle: routes.profiles.jeanie.pageTitle,
  pageDescription: routes.profiles.jeanie.pageDescription
}

export const yanka: Profile = {
  name: "Yanka",
  avatar: `${avatarBasePath}/avatar_yanka`,
  pagePath: routes.profiles.yanka.path,
  pageTitle: routes.profiles.yanka.pageTitle,
  pageDescription: routes.profiles.yanka.pageDescription
}

export const yikSiong: Profile = {
  name: "Yik Siong",
  avatar: `${avatarBasePath}/avatar_yik-siong`,
  pagePath: routes.profiles.yikSiong.path,
  pageTitle: routes.profiles.yikSiong.pageTitle,
  pageDescription: routes.profiles.yikSiong.pageDescription
}
