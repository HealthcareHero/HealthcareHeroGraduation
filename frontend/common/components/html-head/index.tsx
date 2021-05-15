import Head from 'next/head'
import { HtmlHeadProps } from './index.type'

export default function HtmlHead({ title, description }: HtmlHeadProps) {
  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} key="ogtitle" />
        </>
      )}

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} key="ogdesc" />
        </>
      )}
    </Head>
  );
}
