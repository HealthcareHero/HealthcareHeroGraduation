import { NarrowProps } from './types/index.type'
import PageNotFound from 'modules/page-not-found'
import Skeletons from 'common/components/skeletons'
import { SKELETON_PARAGRAPH_ROWS } from './constants'
import Content from './components/content'

export default function Narrow({ data, isLoading, isError }: NarrowProps) {

  return (
    <>
      {
        isLoading && <Skeletons count={1} paragraphRows={SKELETON_PARAGRAPH_ROWS} />
      }
      {
        !isLoading && !isError && (!data || !data?.id) && <PageNotFound />
      }
      {
        // TODO: If error, show error message
      }
      {
        !isLoading && !isError && data?.id && (
          <>
            <Content {...data} />
          </>
        )
      }
    </>
  );
}
