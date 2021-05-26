import { useStyleContentSection } from '../../../../../narrow/common/styles/index.style'
import { Skeleton } from 'antd'
import { PARAGRAPH_ROWS, PARAGRAPH_WIDTH, TITLE_WIDTH } from './constants'

export default function LoadingSkeleton() {
  const styleContentSection = useStyleContentSection();

  return (
    <div className={styleContentSection}>
      <Skeleton
        active
        paragraph={{ rows: PARAGRAPH_ROWS, width: PARAGRAPH_WIDTH }}
        title={{ width: TITLE_WIDTH }}
      />
    </div>
  );
}
