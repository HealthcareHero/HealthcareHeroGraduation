import { FeedPostProps } from 'client/modules/home/feed-detail/common/types/index.type'
import PageNotFound from 'client/modules/page-not-found'
import Content from './components/content'

export default function Wide({ data, isLoading, error }: FeedPostProps) {
  return (
    <>
      {
        // isLoading && <Skeletons count={1} paragraphRows={SKELETON_PARAGRAPH_ROWS} />
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
  )
}
