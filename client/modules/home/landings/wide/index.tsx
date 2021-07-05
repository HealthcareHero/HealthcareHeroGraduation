import { LandingProps } from '../common/types/index.type'
import FeedPostCards from './components/feed-post-cards'

export default function Wide({ data, error, isLoading }: LandingProps) {
  return (
    <div>
      {/* {(isLoading || !data) && <Skeletons count={LOADING_SKELETON_COUNT}/>} */}

      {!isLoading && !error && data && <FeedPostCards data={data} />}
    </div>
  );
}
