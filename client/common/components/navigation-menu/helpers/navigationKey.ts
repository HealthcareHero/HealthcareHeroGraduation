import { NavigationKey } from './navigationKey.type'
import { routes } from "client/common/utils/navigation/routes";

export const navigationKey: NavigationKey = {
  home: routes.home.path,
  profile: routes.profiles.path,
};

export const getSelectedKey = (pathName: string): string => {
  let selectedKey = "";
  try {
    if (pathName === navigationKey.home) {
      selectedKey = navigationKey.home;
    } else if (pathName.includes(navigationKey.profile)) {
      selectedKey = navigationKey.profile;
    }
  } catch (exception) {}
  return selectedKey;
};
