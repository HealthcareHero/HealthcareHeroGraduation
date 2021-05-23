import { useMediaQuery } from 'common/utils/media-query'
import Narrow from './narrow'
import Wide from './wide'

export default function FeedDetail() {
  const { isMdOrLarger } = useMediaQuery();

  return (
    <div>
      { isMdOrLarger ? <Wide /> : <Narrow /> }
    </div>
  );
}

// TODO: Call api to fetch post details
// TODO: If no result from api call, then then show error 404 page