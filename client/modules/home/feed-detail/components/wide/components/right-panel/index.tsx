import { styles } from './styles/index.style'
import { RightPanelProps } from './types/index.type'
import { useState } from 'react'
import { Divider } from 'antd'
import TagGroup from 'client/common/components/tags/tag-group'
import LikeButton from 'client/common/components/buttons/like-button'
import ShareButton from 'client/common/components/buttons/share-button'
import CommentSection from 'client/modules/home/feed-detail/components/comment-section'
// import InputComments from '../../components/input-comment'
import { 
  getFeedUrl,
  getShareDescription,
  onShareSuccess,
  onShareError,
} from 'client/modules/home/common/helpers'

export default function RightPanel({
  id,
  author,
  message,
  tags,
  enableComment,
  comments,
  likeCount,
  timestamp
}: RightPanelProps) {
  const [numLikes, setNumLikes] = useState(likeCount);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.author}>
          <b>{author}</b>
        </div>
        <div className={styles.meta}>
          {timestamp}
          <div>{numLikes} {numLikes === 1 ? "Like" : "Likes"}</div>
        </div>
        { message && <div className={styles.message}>{message}</div> }
        { tags?.length > 0 && <TagGroup texts={tags} /> }
      </div>
      <div className={styles.actionSection}>
        <Divider className={styles.divider} />
        <div className={styles.buttons}>
          <LikeButton count={numLikes} onClick={setNumLikes}/>
          <ShareButton url={getFeedUrl(id)} title={document.title} description={getShareDescription()} onSuccess={onShareSuccess} onError={onShareError}/>
        </div>
        <Divider className={styles.divider} />
      </div>
      <div>
        <CommentSection enable={enableComment} comments={comments} showTopDivider={false} />
      </div>
      {/* 
      { enableComment && <InputComments /> } */}
    </div>
  )
}
