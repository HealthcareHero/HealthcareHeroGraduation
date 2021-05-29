import { useState } from 'react'
import { styles, useGlobalStyleSidePadding } from './styles/index.style'
import { ContentProps } from './types/index.type'
import MediaViewer from '../../components/media-viewer'
import Tags from 'common/components/tags'
import LikeButton from 'common/components/buttons/like-button'
import ShareButton from 'common/components/buttons/share-button'
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
  recipient,
  message,
  media,
  tags,
  enableComment,
  likeCount,
  timestamp }: ContentProps) {
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
      </div>

           

      


      {/* 
          {tags && tags.length>0 && <TagList tagList={tags} displayLength={tagDisplayLength} />}
        </div>

        <div className="icon-buttons">
          <HeartButton feedPostId={feedPostId} likeCount={likeCount} setLikeCount={updateLikeCount} />

          <ShareButon url={`${path.root}${feedPostThread}/${feedPostId}`} />

          {(likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div>}
        </div>
      </div>

      {
        comments && <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
          <Comments comments={comments} />
        </div>
      }
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
