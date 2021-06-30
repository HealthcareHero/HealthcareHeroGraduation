import 'client/common/styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import LayoutMain from 'client/common/components/layouts/main'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
}
