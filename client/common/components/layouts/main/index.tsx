import { styles } from './styles/index.style'
import { LayoutMainProps } from './types/index.type'
import { Layout } from 'antd'
import NavigationMenu from 'client/common/components/navigation-menu'

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
      <Footer className={styles.footer}>Disclaimer: This is a non-incentive private initiative with no relation to any specific organisation.</Footer>
    </Layout>
  )
}
