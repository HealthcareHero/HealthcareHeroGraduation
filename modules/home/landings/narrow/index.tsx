import { LandingProps } from '../common/types/index.type'
import Skeletons from 'common/components/skeletons'
import FeedPosts from './components/feed-posts'
import { LOADING_SKELETON_COUNT } from './constants'

export default function Narrow({ data, isLoading, isError }: LandingProps) {
  return (
    <div>
      {isLoading && <Skeletons count={LOADING_SKELETON_COUNT}/>}

      {!isLoading && !isError && <FeedPosts data={data} />}
    </div>
  );
}
