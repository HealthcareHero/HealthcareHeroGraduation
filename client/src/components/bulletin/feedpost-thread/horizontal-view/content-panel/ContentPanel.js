import React, { useState } from 'react';
import moment from 'moment';
import Comments from '../../Comments';
import TagList from '../../../../common/tag-list/TagList';
import InputWithSubmit from '../../../../common/input-with-submit/InputWithSubmit';
import HeartButton from '../../../../common/button-heart/HeartButton';
import CommentButton from '../../../../common/button-comment/CommentButton';
import ShareButon from '../../../../common/button-share/ShareButton';

import { path, feedPostThread } from '../../../../../utilities/paths';


const tagDisplayLength = 15;

function ContentPanel(props) {
  const {feedPostId, author, message, tags, initialLikeCount, timestamp, commenting, comments, submitting, onSubmit} = {...props};
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  return (
    <>
      <div>
        <b>{author}</b>
      </div>
      <div>
        {message}
      </div>
      { tags && <TagList tagList={tags} displayLength={tagDisplayLength} /> }
      <div style={{fontSize: "0.7em"}}>
        { moment(timestamp).fromNow() }
      </div>
      <div className="icon-buttons">
        <HeartButton feedPostId={feedPostId} likeCount={likeCount} setLikeCount={setLikeCount} />

        { commenting && <CommentButton path={`${feedPostThread}/${feedPostId}`} /> }
        
        <ShareButon url={`${path.root}${feedPostThread}/${feedPostId}`}/>

        { (likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div> }
      </div>
      { 
        comments && <div>
                      <Comments comments={comments} />
                    </div>
      }
      <div style={{marginTop: "24px", position:"sticky", bottom: "8px"}} >
        <InputWithSubmit loading={submitting} onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default ContentPanel;