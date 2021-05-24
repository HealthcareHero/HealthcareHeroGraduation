import { useRouter } from 'next/router'
import FeedDetailOnLoad from './components/feed-detail-on-load'

// This is a HOC because unable to perform api call conditonally such that only call when router is ready
export default function FeedDetail() {
  const router = useRouter();
  
  return (
    <div>
      { router.isReady &&  <FeedDetailOnLoad id={router.query.id as string} />}
    </div>
  );
}
