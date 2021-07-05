import { ContentProps } from './types/index.type'
import TagGroup from 'client/common/components/tags/tag-group'
import { FEED_POST_MESSAGE_DISPLAY_LENGTH } from './constants'

export default function Content({
  message,
  tags,
  likeCount,
  timestamp,
}: ContentProps) {
  return (
    <div>
      { message && (message.length > FEED_POST_MESSAGE_DISPLAY_LENGTH ? `${message.slice(0, FEED_POST_MESSAGE_DISPLAY_LENGTH)}...` : message) }
      { tags && <TagGroup texts={tags} /> }
      <div style={{fontSize: "0.7em", display:"flex", justifyContent:"space-between"}}>
          <span>{timestamp}</span>
          { (likeCount > 0) && <span>{likeCount} {likeCount === 1 ? "Like" : "Likes"}</span> }
      </div>
    </div>
  );
}
