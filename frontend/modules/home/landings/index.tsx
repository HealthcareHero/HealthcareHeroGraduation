import { routes } from 'common/utils/navigation/routes'
import { useMediaQuery } from 'common/utils/media-query'
import HtmlHead from 'common/components/html-head'
import Narrow from './narrow'
import Wide from './wide'
import { useTestDragons } from "common/data-access/services/google-cloud-functions/test-query/dragons";

export default function HomeLanding() {
  const { isMdOrLarger } = useMediaQuery();
  const testDragonResponse = useTestDragons();

  return (
    <div>
      <HtmlHead title={routes.home.pageTitle} description={routes.home.pageDescription} />

      { isMdOrLarger ? <Wide /> : <Narrow {...testDragonResponse}/> }
    </div>
  );
}