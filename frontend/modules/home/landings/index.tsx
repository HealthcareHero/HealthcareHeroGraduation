import { routes } from 'common/utils/navigation/routes'
import { useMediaQuery } from 'common/utils/media-query'
import HtmlHead from 'common/components/html-head'
import Narrow from './narrow'
import Wide from './wide'
import { useTestDragons } from "common/data-access/services/space-land-for-test-only/test-query/dragons";

export default function HomeLanding() {
  const { isMdOrLarger } = useMediaQuery();
  const response = useTestDragons();

  return (
    <div>
      <HtmlHead title={routes.home.pageTitle} description={routes.home.pageDescription} />

      { isMdOrLarger ? <Wide /> : <Narrow {...response}/> }
    </div>
  );
}
