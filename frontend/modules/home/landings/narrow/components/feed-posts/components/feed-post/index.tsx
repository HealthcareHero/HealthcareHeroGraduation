import { styles, useStyleContentSection } from './styles/index.style'
import { FeedPostProps } from '../../../../../common/types/index.type'
import MediaVisualViewer from './components/media-visual-viewer'
import TextVisualViewer from './components/text-visual-viewer'
import ExpandableText from 'common/components/expandable-text'
import Tags from 'common/components/tags'
import LikeButton from 'common/components/buttons/like-button'
import CommentButton from 'common/components/buttons/comment-button'
import ShareButton from 'common/components/buttons/share-button'
import { enableMediaVisualViewer, getShareUrl, onShareSuccess, onShareError } from './helpers'
import { MESSAGE_DISPLAY_LENGTH, TAG_TEXT_DISPLAY_LENGTH, SHARE_DESCRIPTION } from './constants'

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

  return (
    <div>
      { enableMediaVisualViewer(media) ? <MediaVisualViewer media={media} /> : <TextVisualViewer text={message} />}

      <div className={styleContentSection}>
        <div className={styles.header}>
          <div className={styles.author}>
            <b>{author}</b>
          </div>
          <div className={styles.timestamp}>
            {/* { moment(timestamp).fromNow() } */}
            TIME
          </div>
        </div>

        { message && <div><ExpandableText text={message} displayLength={MESSAGE_DISPLAY_LENGTH} /></div> }
        { tags?.length > 0 && <Tags texts={tags} textDisplayLength={TAG_TEXT_DISPLAY_LENGTH} /> }
      </div>

      <div className={[styleContentSection, styles.footer].join(" ")}>
        <div className={styles.buttons}>
          <LikeButton />
          <CommentButton />
          <ShareButton url={getShareUrl()} title={document.title} description={SHARE_DESCRIPTION} onSuccess={onShareSuccess} onError={onShareError}/>
        </div>
        

        {/* { commenting && <CommentButton path={`${feedPostThread}/${id}`} /> }
        
        <ShareButon url={`${path.root}${feedPostThread}/${id}`}/>

        { (likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div> } */}
        <div>5 likes {/* like-count section */}</div>
      </div>     
    </div>
  );
}
