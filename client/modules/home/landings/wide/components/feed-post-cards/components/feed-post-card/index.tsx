import { styles } from './styles/index.style'
import { useState } from 'react'
import { FeedPostProps } from '../../../../../common/types/index.type'
import { Card } from 'antd'
import LikeButton from 'client/common/components/buttons/like-button'
import CommentButton from 'client/common/components/buttons/comment-button'
import ShareButton from 'client/common/components/buttons/share-button'
import Content from './components/content'
import { 
  getFeedUrl, 
  getShareDescription, 
  onShareSuccess, 
  onShareError,
} from 'client/modules/home/common/helpers'

const { Meta } = Card;

export default function FeedPostCard({
  id,
  author,
  recipient,
  message,
  media,
  tags,
  enableComment,
  likeCount,
  timestamp,
}: FeedPostProps) {
  const [numLikes, setNumLikes] = useState(likeCount);
  
  return (
    <Card className={styles.card}
      hoverable
      cover={ (media && media.length > 0) ? <img src={media[0]} alt="media" /> : false }
      actions={[
        <LikeButton count={numLikes} onClick={setNumLikes}/>,
        enableComment && <CommentButton url={getFeedUrl(id)} />,
        <ShareButton url={getFeedUrl(id)} title={document.title} description={getShareDescription()} onSuccess={onShareSuccess} onError={onShareError}/>
      ]}
    >
      <a href={getFeedUrl(id)}>
        <Meta
          title={author}
          description={<Content message={message} tags={tags} timestamp={timestamp} likeCount={likeCount}/>}
        />
      </a>
    </Card>
  );
}
