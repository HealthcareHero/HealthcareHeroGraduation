import { useMediaQuery } from 'common/utils/media-query'
import { useTestDragon } from 'common/data-access/services/space-land-for-test-only/test-query/dragon'
import { FeedDetailProps } from './types/index.type'
import HtmlHead from 'common/components/html-head'
import Narrow from './components/narrow'
import Wide from './components/wide'
import { routes } from 'common/utils/navigation/routes'

export default function FeedDetail({ id }: FeedDetailProps) {
  const { isMdOrLarger } = useMediaQuery();
  const response = useTestDragon(id);

  return (
    <div>
      <HtmlHead title={routes.feed.pageTitle} description={routes.feed.pageDescription} />

      { isMdOrLarger ? <Wide /> : <Narrow /> }
    </div>
  );
}
