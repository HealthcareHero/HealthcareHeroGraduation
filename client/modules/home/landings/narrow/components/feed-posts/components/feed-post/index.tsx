import { useState } from 'react'
import { styles, useStyleContentSection } from './styles/index.style'
import { FeedPostProps } from '../../../../../common/types/index.type'
import MediaVisualViewer from './components/media-visual-viewer'
import TextVisualViewer from './components/text-visual-viewer'
import ExpandableText from 'client/common/components/expandable-text'
import TagGroup from 'client/common/components/tags/tag-group'
import LikeButton from 'client/common/components/buttons/like-button'
import CommentButton from 'client/common/components/buttons/comment-button'
import ShareButton from 'client/common/components/buttons/share-button'
import { FEED_POST_MESSAGE_DISPLAY_LENGTH } from './constants'
import { 
  enableMediaVisualViewer, 
  getFeedUrl, 
  getShareDescription, 
  onShareSuccess, 
  onShareError,
} from 'client/modules/home/common/helpers'

export default function FeedPost({
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
  const styleContentSection = useStyleContentSection();
  const [numLikes, setNumLikes] = useState(likeCount);

  return (
    <div>
      { enableMediaVisualViewer(media) ? <MediaVisualViewer media={media} /> : <TextVisualViewer text={message} />}

      <div className={styleContentSection}>
        <div className={styles.header}>
          <div className={styles.author}>
            <b>{author}</b>
          </div>
          <div className={styles.timestamp}>
            {timestamp}
          </div>
        </div>
        { message && <div><ExpandableText text={message} displayLength={FEED_POST_MESSAGE_DISPLAY_LENGTH} /></div> }
        { tags?.length > 0 && <TagGroup texts={tags} /> }
        <div className={styles.footer}>
          <div className={styles.buttons}>
            <LikeButton count={numLikes} onClick={setNumLikes}/>
            <CommentButton url={getFeedUrl(id)} />
            <ShareButton url={getFeedUrl(id)} title={document.title} description={getShareDescription()} onSuccess={onShareSuccess} onError={onShareError}/>
          </div>
          <div>{numLikes} {numLikes === 1 ? "Like" : "Likes"}</div>
        </div> 
      </div>
    </div>
  );
}
