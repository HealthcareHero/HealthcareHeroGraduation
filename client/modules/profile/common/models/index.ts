import { Profile } from './index.type'
import { getProfileRouteTitle } from '../helpers'
import { AVATAR_BASE_PATH } from '../constants'
import Bernard from '../../components/bernard'
import Jeanie from '../../components/jeanie'

export const bernard: Profile = {
  name: "Bernard",
  avatar: `${AVATAR_BASE_PATH}/avatar_bernard.png`,
  pageComponent: Bernard,
  pagePathSuffix: "bernard",
  pageTitle: getProfileRouteTitle("Bernard"),
  pageDescription: "A Medical Hero",
}

export const jeanie: Profile = {
  name: "Jeanie",
  avatar: `${AVATAR_BASE_PATH}/avatar_jeanie.png`,
  pageComponent: Jeanie,
  pagePathSuffix: "jeanie",
  pageTitle: getProfileRouteTitle("Jeanie"),
  pageDescription: "A Medical Hero",
}

export const priyanka: Profile = {
  name: "Priyankadarshni",
  avatar: `${AVATAR_BASE_PATH}/avatar_priyanka.png`,
  pagePathSuffix: "priyankadarshni",
  pageTitle: getProfileRouteTitle("Priyankadarshni"),
  pageDescription: "A Medical Hero",
}

export const yikSiong: Profile = {
  name: "Yik Siong",
  avatar: `${AVATAR_BASE_PATH}/avatar_yik-siong.png`,
  pagePathSuffix: "yik-siong",
  pageTitle: getProfileRouteTitle("Yik Siong"),
  pageDescription: "A Medical Hero",
}
