import { useMediaQuery } from 'client/common/utils/media-query'
import { useGetFeedDetail } from 'client/data-access/execute/feed/getFeedDetail'
import { FeedDetailProps } from './types/index.type'
import HtmlHead from 'client/common/components/html-head'
import Narrow from './components/narrow'
import Wide from './components/wide'
import { routes } from 'client/common/utils/navigation/routes'

export default function FeedDetail({ id }: FeedDetailProps) {
  const { isMdOrLarger } = useMediaQuery();
  const response = useGetFeedDetail({id});

  return (
    <div>
      <HtmlHead title={routes.feed.pageTitle} description={routes.feed.pageDescription} />

      { isMdOrLarger ? <Wide /> : <Narrow {...response}/> }
    </div>
  );
}
