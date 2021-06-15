import { LandingProps } from '../common/types/index.type'
import Skeletons from 'client/common/components/skeletons'
import FeedPosts from './components/feed-posts'
import { LOADING_SKELETON_COUNT } from './constants'

export default function Narrow({ data, isLoading, isError }: LandingProps) {
  return (
    <div>
      {(isLoading || !data) && <Skeletons count={LOADING_SKELETON_COUNT}/>}

      {!isLoading && !isError && data && <FeedPosts data={data} />}
    </div>
  );
}
