import { styles } from './styles/index.style'
import { FeedDetailCommentProps } from 'client/modules/home/feed-detail/common/types/index.type'

export default function Comment({ author, message, timestamp}: FeedDetailCommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <span><b>{author}</b></span>
        <div className={styles.timestamp}>{timestamp}</div>
      </div>
      {message}
    </div>
  )
}
