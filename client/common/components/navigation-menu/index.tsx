import { useRouter } from 'next/router'
import Link from 'next/link'
import { Menu } from 'antd'
import { routes } from 'client/common/utils/navigation/routes'
import { navigationKey, getSelectedKey } from './helpers/navigationKey'

export default function NavigationMenu() {
  const router = useRouter();
  const selectedKey = getSelectedKey(router.pathname);

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
      <Menu.Item key={navigationKey.home}>
        <Link href={routes.home.path}>
          {routes.home.navTabTitle}
        </Link>
      </Menu.Item>
      <Menu.Item key={navigationKey.profile}>
        <Link href={routes.profiles.path}>
          {routes.profiles.navTabTitle} 
        </Link>
      </Menu.Item>
    </Menu>
  )
}
