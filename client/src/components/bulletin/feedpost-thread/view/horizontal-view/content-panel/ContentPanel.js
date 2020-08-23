import React from 'react';
import moment from 'moment';
import { useStyle } from './useStyle';
import Comments from '../../comment/Comments';
import TagList from '../../../../../common/tag-list/TagList';
import InputWithSubmit from '../../../../../common/input-with-submit/InputWithSubmit';
import HeartButton from '../../../../../common/button-heart/HeartButton';
import ShareButon from '../../../../../common/button-share/ShareButton';

import { path, feedPostThread } from '../../../../../../utilities/paths';
import { useFeedPostThread } from '../../../hook';

const tagDisplayLength = 15;

function ContentPanel() {
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
  
  const { headerStyle, authorStyle, timestampStyle, footerStyle, commentInputBarStyle } = useStyle();

  return (
    <>
      <div style={headerStyle}>
        <div style={authorStyle}>
          <b>{author}</b>
        </div>
        <div style={timestampStyle}>
          { moment(timestamp).fromNow() }
        </div>
      </div>

      <div>
        {message}
      </div>

      { tags && tags.length>0 && <TagList tagList={tags} displayLength={tagDisplayLength} /> }
      
      <div style={footerStyle}>
        <div>
          <HeartButton feedPostId={feedPostId} likeCount={likeCount} setLikeCount={updateLikeCount} />
          <ShareButon url={`${path.root}${feedPostThread}/${feedPostId}`}/>
        </div>
        <div>
          { (likeCount > 0) && <div>{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div> }
        </div>
      </div>

      { 
        comments && <div>
                      <Comments comments={comments} />
                    </div>
      }

      {
        commenting && (
          <div style={commentInputBarStyle} >
            <InputWithSubmit text={inputText} setText={updateInputText} loading={submitting} onSubmit={submitComment} />
          </div>
        )
      }
    </>
  );
}

export default ContentPanel;