import { useState } from 'react'
import { styles, useGlobalStyleSidePadding } from './styles/index.style'
import { FeedDetailContentProps } from 'modules/home/feed-detail/common/types/index.type'
import Tags from 'common/components/tags'
import LikeButton from 'common/components/buttons/like-button'
import ShareButton from 'common/components/buttons/share-button'
import MediaViewer from '../../components/media-viewer'
import CommentSection from '../comment-section'
import { NARROW_TAG_TEXT_DISPLAY_LENGTH } from 'common/constants'
import { 
  enableMediaVisualViewer,
  getFeedUrl,
  getShareDescription,
  onShareSuccess,
  onShareError,
} from 'modules/home/common/helpers'

export default function Content({ id,
  author,
  message,
  media,
  tags,
  enableComment,
  comments,
  likeCount,
  timestamp }: FeedDetailContentProps) {
  const [numLikes, setNumLikes] = useState(likeCount);
  const styleMainSection = useGlobalStyleSidePadding();

  return (
    <div>
      { enableMediaVisualViewer(media) && <MediaViewer media={media} /> }

      <div className={styleMainSection}>
        <div className={styles.header}>
          <div className={styles.author}>
            <b>{author}</b>
          </div>
          <div className={styles.timestamp}>
            {/* { moment(timestamp).fromNow() } */}
            TIME
          </div>
        </div>
        { message && <div>{message}</div> }
        { tags?.length > 0 && <Tags texts={tags} textDisplayLength={NARROW_TAG_TEXT_DISPLAY_LENGTH} /> }
        <div className={styles.footer}>
          <div className={styles.buttons}>
            <LikeButton count={numLikes} onClick={setNumLikes}/>
            <ShareButton url={getFeedUrl(id)} title={document.title} description={getShareDescription()} onSuccess={onShareSuccess} onError={onShareError}/>
          </div>
          <div>{numLikes} {numLikes === 1 ? "Like" : "Likes"}</div>
        </div>

        <CommentSection enable={enableComment} comments={comments} />
      </div>


      {/* 

      {
        commenting && (
          <div style={{ paddingLeft: "8px", paddingRight: "8px", marginTop: "24px", position: "sticky", bottom: "8px" }} >
            <InputWithSubmit text={inputText} setText={updateInputText} loading={submitting} onSubmit={submitComment} />
          </div>
        )
      } */}
    </div>
  );
}
