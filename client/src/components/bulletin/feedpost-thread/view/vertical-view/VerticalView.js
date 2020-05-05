import React from 'react';
import moment from 'moment';
import { useFeedPostThread } from '../../hook';
import InputWithSubmit from '../../../../common/input-with-submit/InputWithSubmit';
import LoadingOverlay from '../../../../common/loading/LoadingOverlay';
import MediaViewer from '../../../../common/carousel-media/MediaViewer';
import ExpansionTextPanel from '../../../../common/expansion-text-panel/ExpansionTextPanel';
import TagList from '../../../../common/tag-list/TagList';
import HeartButton from '../../../../common/button-heart/HeartButton';
import ShareButon from '../../../../common/button-share/ShareButton';
import Comments from '../comment/Comments';

import { path, feedPostThread } from '../../../../../utilities/paths';

import './verticalView.css';

const tagDisplayLength = 15;
const messageDisplayLength = 125;

function VerticalView(props) {
  const { feedPostId,
          author,
          message,
          media,
          tags,
          likeCount,
          timestamp,
          comments,
          commenting,
          updateLikeCount,
          inputText,
          updateInputText,
          submitting,
          submitComment,
          loading,
          error } = useFeedPostThread();

  return (
    <div className="feedPost-vertical-view">
      {
        loading && (
          <LoadingOverlay size="24">
            <div style={{ height: "100vh" }}></div>
          </LoadingOverlay>
        )
      }
      {
        !loading && !error && (
          <>
            <div className="feedPost">
              {media && <div className="feedPost-media"><MediaViewer mediaList={media} loading="lazy" /></div>}

              <div className="icon-buttons">
                <HeartButton feedPostId={feedPostId} likeCount={likeCount} setLikeCount={updateLikeCount} />

                <ShareButon url={`${path.root}${feedPostThread}/${feedPostId}`} />

                {(likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div>}
              </div>

              <div className="content">
                <div><b>{author}</b></div>

                {message && <div className="message"><ExpansionTextPanel text={message} displayLength={messageDisplayLength} /></div>}

                {tags && <TagList tagList={tags} displayLength={tagDisplayLength} />}

                <div style={{ fontSize: "0.7em" }}>
                  {moment(timestamp).fromNow()}
                </div>
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
            }
          </>
        )
      }
      {
        !loading && error && (
          <div>Page not found</div>
        )
      }
    </div>
  );
}

export default VerticalView;