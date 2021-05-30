import { ProfilePage } from './index.type'
import { bernard, jeanie } from '../common/models'

export const getProfile = (name: string): ProfilePage => {
  switch(name) {
    case bernard.pagePathSuffix:
      return {
        component: bernard.pageComponent,
        title: bernard.pageTitle,
        description: bernard.pageDescription,
      };
    case jeanie.pagePathSuffix:
      return {
        component: jeanie.pageComponent,
        title: jeanie.pageTitle,
        description: jeanie.pageDescription
      };
    default: 
      return null;
  }
}