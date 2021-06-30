import { routes } from 'client/common/utils/navigation/routes'
import { useMediaQuery } from 'client/common/utils/media-query'
import NewFeedPostCreation from './common/components/new-feed-post-creation'
import HtmlHead from 'client/common/components/html-head'
import Narrow from './narrow'
import Wide from './wide'
import { useGetFeedPosts } from "client/data-access/execute/feed/getFeedPosts";

export default function HomeLanding() {
  const { isMdOrLarger } = useMediaQuery();
  const response = useGetFeedPosts();

  return (
    <div>
      <HtmlHead title={routes.home.pageTitle} description={routes.home.pageDescription} />

      <NewFeedPostCreation />

      { isMdOrLarger ? <Wide /> : <Narrow data={response.data} isLoading={response.isLoading} error={response.error} /> }
    </div>
  );
}
