import { useMediaQuery } from 'common/utils/media-query'
import { useGetFeedDetail } from 'api/execute/feed/getFeedDetail'
import { FeedDetailProps } from './types/index.type'
import HtmlHead from 'common/components/html-head'
import Narrow from './components/narrow'
import Wide from './components/wide'
import { routes } from 'common/utils/navigation/routes'

export default function FeedDetail({ id }: FeedDetailProps) {
  const { isMdOrLarger } = useMediaQuery();
  const response = useGetFeedDetail({id});

  return (
    <div>
      <HtmlHead title={routes.feed.pageTitle} description={routes.feed.pageDescription} />

      {response.isLoading && <div>LOADING</div>}
      {response.isError && <div>HAS ERROR</div> && console.log("HAS ERROR:", response.data)}
      {!response.isLoading && !response.isError && response.data && <div>HAS DATA</div> && console.log("DATA:", response.data)}


      { isMdOrLarger ? <Wide /> : <Narrow /> }
    </div>
  );
}
