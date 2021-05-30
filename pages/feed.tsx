import { useRouter } from 'next/router'
import FeedDetail from 'modules/home/feed-detail'
import PageNotFound from 'modules/page-not-found'

// Example Path: /feed?id=id_of_post
export default function Feed() {
  const router = useRouter();

  return (
    <div>
      {router.isReady &&
        (router.query.id ? (
          <FeedDetail id={router.query.id as string} />
        ) : (
          <PageNotFound />
        ))}
    </div>
  );
}
