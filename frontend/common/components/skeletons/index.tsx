import { SkeletonsProps } from './types/index.type'
import { Fragment } from 'react'
import { Divider } from 'antd'
import Skeleton from './components/skeleton'

export default function LoadingSkeletons({
  count,
  paragraphRows,
  paragraphWidth,
  titleWidth,
  customStyles,
}: SkeletonsProps) {
  let skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <Fragment key={i}>
        {i !== 0 && <Divider />}
        <Skeleton
          paragraphRows={paragraphRows}
          paragraphWidth={paragraphWidth}
          titleWidth={titleWidth}
          customStyles={customStyles}
        />
      </Fragment>
    );
  }

  return <>{skeletons}</>;
}
