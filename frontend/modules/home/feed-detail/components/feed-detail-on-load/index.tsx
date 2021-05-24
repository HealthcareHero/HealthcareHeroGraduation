import { useMediaQuery } from 'common/utils/media-query'
import { useTestDragon } from 'common/data-access/services/space-land-for-test-only/test-query/dragon'
import { FeedDetailOnLoadProps } from './types/index.type'
import Narrow from '../narrow'
import Wide from '../wide'

export default function FeedDetailOnLoad({ id }: FeedDetailOnLoadProps) {
  const { isMdOrLarger } = useMediaQuery();
  const response = useTestDragon(id);

  return (
    <div>
      { isMdOrLarger ? <Wide /> : <Narrow /> }
    </div>
  );
}
