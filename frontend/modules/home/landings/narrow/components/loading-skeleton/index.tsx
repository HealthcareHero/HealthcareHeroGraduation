import { styleMethods } from '../../styles/index.style'
import { Skeleton } from 'antd'

export default function LoadingSkeleton() {
  return (
    <div className={styleMethods.getContentSection()}>
      <Skeleton
        active
        paragraph={{ rows: 3, width: "100%" }}
        title={{ width: "20%" }}
      />
    </div>
  );
}
