import React from 'react';
import MediaViewer from '../../../common/carousel-media/MediaViewer';
import ContentPanel from './content-panel/ContentPanel';

import './horizontalView.css';

function HorizontalView(props) {
  const { feedPostId, author, media, message, tags, likeCount, timestamp, commenting, comments, submitting, onSubmit } = {...props};

  return (
    <div className="feedPost-horizontal-view">
      {
        media && (
          <>
            <div className="left">
              <div className="media">
                <MediaViewer mediaList={media} />
              </div>
            </div>
            <div className="right">
              <ContentPanel feedPostId={feedPostId}
                            author={author}
                            message={message}
                            tags={tags}
                            initialLikeCount={likeCount}
                            timestamp={timestamp}
                            commenting={commenting}
                            comments={comments}
                            onSubmit={onSubmit}/>
            </div>
          </>
        )
      }
      {
        !media && (
          <div className="middle">
          </div>
        )
      }
    </div>
  );
}

export default HorizontalView;