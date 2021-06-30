import { useStyleContentSection } from './styles/index.style'
import { Skeleton as AntdSkeleton } from 'antd'
import { SkeletonProps } from '../../common/types/index.type'
import { PARAGRAPH_ROWS, PARAGRAPH_WIDTH, TITLE_WIDTH } from './constants'

export default function Skeleton({ paragraphRows, paragraphWidth, titleWidth, customStyles}: SkeletonProps) {
  const styleContentSection = useStyleContentSection();

  return (
    <div className={customStyles?.container ?? styleContentSection}>
      <AntdSkeleton
        active
        paragraph={{ rows: paragraphRows ?? PARAGRAPH_ROWS, width: paragraphWidth ?? PARAGRAPH_WIDTH }}
        title={{ width: titleWidth ?? TITLE_WIDTH }}
      />
    </div>
  );
}
