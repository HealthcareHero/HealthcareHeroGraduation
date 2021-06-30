import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="
              script-src 'self' ;
              img-src 'self' data: https://vitals.vercel-insights.com/v1/vitals https://storage.googleapis.com https://firebasestorage.googleapis.com https://www.nme.com https://blog.playstation.com https://console.kr-asia.com https://i.pinimg.com blob: ;
              style-src 'self' 'unsafe-inline' ;
              font-src 'self' ;
              connect-src 'self' https://vitals.vercel-insights.com/v1/vitals ;
              manifest-src 'self' ; 
              prefetch-src 'self' https://vitals.vercel-insights.com/v1/vitals ;
              default-src 'self' https://vitals.vercel-insights.com/v1/vitals ; 
            "
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument