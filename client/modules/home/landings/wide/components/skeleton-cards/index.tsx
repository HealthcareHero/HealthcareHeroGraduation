import { styles } from './styles/index.style'
import { SkeletonCardsProps } from './types/index.type'
import { Fragment } from 'react'
import SkeletonCard from './components/skeleton-card'

export default function SkeletonCards({ count }: SkeletonCardsProps) {
  let skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <Fragment key={i}>
        <SkeletonCard />
      </Fragment>
    );
  }
  return (
    <div className={styles.container}>
      { skeletons }
    </div>
  );
}
