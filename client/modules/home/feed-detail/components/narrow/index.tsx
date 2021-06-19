import { NarrowProps } from './types/index.type'
import PageNotFound from 'client/modules/page-not-found'
import Skeletons from 'client/common/components/skeletons'
import { SKELETON_PARAGRAPH_ROWS } from './constants'
import Content from './components/content'

export default function Narrow({ data, isLoading, error }: NarrowProps) {

  return (
    <>
      {
        isLoading && <Skeletons count={1} paragraphRows={SKELETON_PARAGRAPH_ROWS} />
      }
      {
        !isLoading && !error && (!data || !data?.id) && <PageNotFound />
      }
      {
        // TODO: If error, show error message
      }
      {
        !isLoading && !error && data?.id && (
          <>
            <Content {...data} />
          </>
        )
      }
    </>
  );
}
