import { routes } from 'common/utils/navigation/routes'
import { useMediaQuery } from 'common/utils/media-query'
import HtmlHead from 'common/components/html-head'
import Narrow from './views/narrow'
import Wide from './views/wide'

export default function Home() {
  const { isMdOrLarger } = useMediaQuery();

  return (
    <div>
      <HtmlHead title={routes.home.pageTitle} description={routes.home.pageDescription} />

      { isMdOrLarger ? <Wide /> : <Narrow /> }
    </div>
  );
}
