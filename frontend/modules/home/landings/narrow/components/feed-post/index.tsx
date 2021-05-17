import { styleMethods } from '../../styles/index.style'
import { styles } from './styles/index.style'
import { FeedPostProps } from '../../../common/types/index.type'
import ExpandableText from 'common/components/expandable-text'
import Tags from 'common/components/tags'
import { MESSAGE_DISPLAY_LENGTH, TAG_TEXT_DISPLAY_LENGTH } from './constants'

export default function FeedPost({
  id,
  author,
  recipient,
  message,
  media,
  tags,
  enableComment,
  initialLikeCount,
  timestamp,
}: FeedPostProps) {
  return (
    <div>
      {/* { media && media.length>0 && <MediaViewer mediaList={media} loading="lazy" /> } */}

      <div className={styleMethods.getContentSection()}>
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

      {/* <div className="icon-buttons">
        <HeartButton feedPostId={id} likeCount={likeCount} setLikeCount={setLikeCount} />

        { commenting && <CommentButton path={`${feedPostThread}/${id}`} /> }
        
        <ShareButon url={`${path.root}${feedPostThread}/${id}`}/>

        { (likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div> }
      </div>      */}
    </div>
  );
}
