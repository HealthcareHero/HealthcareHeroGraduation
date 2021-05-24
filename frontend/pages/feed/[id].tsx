import { useRouter } from 'next/router'
import FeedDetail from 'modules/home/feed-detail'

export default function Feed() {
  const router = useRouter();

  return (
    <div>
      { router.isReady &&  <FeedDetail id={router.query.id as string} />}
    </div>
  )
}
