import { routes } from 'client/common/utils/navigation/routes'
import { useMediaQuery } from 'client/common/utils/media-query'
import HtmlHead from 'client/common/components/html-head'
import Narrow from './narrow'
import Wide from './wide'
import { useGetFeedPosts } from "client/data-access/execute/feed/getFeedPosts";

export default function HomeLanding() {
  const { isMdOrLarger } = useMediaQuery();
  const {data, isLoading, isError} = useGetFeedPosts();

  return (
    <div>
      <HtmlHead title={routes.home.pageTitle} description={routes.home.pageDescription} />

      { isMdOrLarger ? <Wide /> : <Narrow data={data?.feedPosts} isLoading={isLoading} isError={isError} /> }
    </div>
  );
}
