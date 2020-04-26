import React from 'react';
import FeedPost from '../../feedpost/FeedPost';
import Comments from '../Comments';
import InputWithSubmit from '../../../common/input-with-submit/InputWithSubmit';

function VerticalView(props) {
  const { feedPostId, author, message, media, tags, likeCount, timestamp, comments, submitting, onSubmit } = {...props};
  return (
    <div>
      <FeedPost id={feedPostId} 
                  author={author} 
                  message={message} 
                  media={media} 
                  tags={tags} 
                  initialLikeCount={likeCount} 
                  timestamp={timestamp}
      />
      { 
        comments && <div style={{paddingLeft: "8px", paddingRight:"8px"}}>
                      <Comments comments={comments} />
                    </div>
      }
      <div style={{paddingLeft:"8px", paddingRight:"8px", marginTop: "24px", position:"sticky", bottom: "8px"}} >
        <InputWithSubmit loading={submitting} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default VerticalView;