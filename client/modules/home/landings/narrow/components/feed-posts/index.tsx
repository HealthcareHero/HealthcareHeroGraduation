import { FeedPostsProps } from './types/index.type'
import { Fragment } from 'react'
import { Divider } from 'antd'
import FeedPost from './components/feed-post'

export default function FeedPosts({ data }: FeedPostsProps) {
  return (
    <>
      {data.map((item, index) => (
        <Fragment key={index}>
          {index !== 0 && <Divider />}
          <FeedPost {...item} />
        </Fragment>
      ))}
    </>
  );
}
