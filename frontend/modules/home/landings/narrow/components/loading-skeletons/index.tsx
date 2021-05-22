import { LoadingSkeletonsProps } from './types/index.type'
import { Fragment } from 'react'
import { Divider } from 'antd';
import LoadingSkeleton from './components/loading-skeleton'

export default function LoadingSkeletons({ count }: LoadingSkeletonsProps) {
  let skeletons = [];
  for (let i = 0; i<count; i++){
    skeletons.push((
      <Fragment key={i}>
        {i !== 0 && <Divider />}
        <LoadingSkeleton/>
      </Fragment>
    ));
  }

  return (
    <>
      {skeletons}
    </>
  );
}
