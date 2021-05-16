import { styles } from './styles/index.style'
import { LayoutMainProps } from './types/index.type'
import { Layout } from 'antd'
import NavigationMenu from 'common/components/navigation-menu'

const { Header, Content, Footer } = Layout;

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo} />
        <NavigationMenu />
      </Header>
      <Content>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
      <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
