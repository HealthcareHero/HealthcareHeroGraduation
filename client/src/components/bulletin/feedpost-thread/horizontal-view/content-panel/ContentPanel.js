import React from 'react';
import moment from 'moment';
import Comments from '../../Comments';
import TagList from '../../../../common/tag-list/TagList';
import InputWithSubmit from '../../../../common/input-with-submit/InputWithSubmit';
import HeartButton from '../../../../common/button-heart/HeartButton';
import ShareButon from '../../../../common/button-share/ShareButton';

import { path, feedPostThread } from '../../../../../utilities/paths';
import { useFeedPostThread } from '../../hook';

const tagDisplayLength = 15;

function ContentPanel(props) {
  const { feedPostId, 
          author,
          message,
          tags,
          likeCount,
          timestamp,
          commenting,
          comments,
          updateLikeCount,
          inputText,
          updateInputText,
          submitting,
          submitComment } = useFeedPostThread();

  return (
    <>
      <div>
        <b>{author}</b>
      </div>

      <div>
        {message}
      </div>

      { tags && <TagList tagList={tags} displayLength={tagDisplayLength} /> }
      
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <span style={{fontSize: "0.7em", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          { moment(timestamp).fromNow() }
        </span>
        { (likeCount > 0) && <div className="number-of-likes" style={{height: "32px", display: "flex", flexDirection: "column", justifyContent: "center"}}>{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div> }
      </div>

      <div className="icon-buttons" style={{marginTop:"1em", display:"flex"}}>
        <HeartButton feedPostId={feedPostId} likeCount={likeCount} setLikeCount={updateLikeCount} />
        <ShareButon url={`${path.root}${feedPostThread}/${feedPostId}`}/>
      </div>

      { 
        comments && <div>
                      <Comments comments={comments} />
                    </div>
      }

      {
        commenting && (
          <div style={{marginTop: "24px", position:"sticky", bottom: "8px"}} >
            <InputWithSubmit text={inputText} setText={updateInputText} loading={submitting} onSubmit={submitComment} />
          </div>
        )
      }
    </>
  );
}

export default ContentPanel;