import { styles } from './styles/index.style'
import { FeedPostsProps } from './types/index.type'
import { Fragment } from 'react'
import FeedPostCard from './components/feed-post-card'

export default function FeedPostCards({ data }: FeedPostsProps) {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <Fragment key={index}>
          <FeedPostCard {...item} />
        </Fragment>
      ))}
    </div>
  );
}
