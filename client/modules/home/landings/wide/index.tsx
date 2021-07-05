import { LandingProps } from '../common/types/index.type'
import FeedPostCards from './components/feed-post-cards'
import SkeletonCards from './components/skeleton-cards'

export default function Wide({ data, error, isLoading }: LandingProps) {
  return (
    <div>
      {(isLoading || !data) && <SkeletonCards count={10}/>}

      {!isLoading && !error && data && <FeedPostCards data={data} />}
    </div>
  );
}
