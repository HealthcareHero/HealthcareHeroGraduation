import { styles } from './styles/index.style'
import { FeedDetailContentProps } from 'client/modules/home/feed-detail/common/types/index.type'
import LeftPanel from '../left-panel'
import RightPanel from '../right-panel'
import { enableMediaVisualViewer } from 'client/modules/home/common/helpers'

export default function Content({ id,
  author,
  message,
  media,
  tags,
  enableComment,
  comments,
  likeCount,
  timestamp}: FeedDetailContentProps) {
  return (
    <div className={styles.container}>
      { 
        enableMediaVisualViewer(media) && 
        <>
          <div className={styles.left}>
            <LeftPanel media={media} />
          </div>
          <div className={styles.right}>
            <RightPanel 
              id={id}
              author={author} 
              message={message}
              tags={tags}
              enableComment={enableComment}
              comments={comments}
              likeCount={likeCount}
              timestamp={timestamp}
            />
          </div>
        </>
      }
      { 
        !enableMediaVisualViewer(media) && 
        <div className={styles.centerContainer}>
          <div className={styles.center}>
            <RightPanel 
              id={id}
              author={author} 
              message={message}
              tags={tags}
              enableComment={enableComment}
              comments={comments}
              likeCount={likeCount}
              timestamp={timestamp}
            />
          </div>
        </div>
      }
      
    </div>
  );
}
