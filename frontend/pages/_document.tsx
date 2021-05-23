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
              img-src 'self' data: https://asia-northeast1-healthcare-heroes.cloudfunctions.net https://www.nme.com https://blog.playstation.com https://console.kr-asia.com https://i.pinimg.com ;
              style-src 'self' 'unsafe-inline' ;
              font-src 'self' ;
              connect-src 'self' https://asia-northeast1-healthcare-heroes.cloudfunctions.net https://api.spacex.land ;
              manifest-src 'self' ; 
              prefetch-src 'self' https://asia-northeast1-healthcare-heroes.cloudfunctions.net https://api.spacex.land ;
              default-src 'self' https://asia-northeast1-healthcare-heroes.cloudfunctions.net https://api.spacex.land ; 
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