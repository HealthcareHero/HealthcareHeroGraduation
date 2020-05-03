import React from 'react';
import LoadingOverlay from '../../../common/loading/LoadingOverlay';
import MediaViewer from '../../../common/carousel-media/MediaViewer';
import ContentPanel from './content-panel/ContentPanel';

import { useFeedPostThread } from '../hook';

import './horizontalView.css';

function HorizontalView(props) {
  const { loading, error, media } = useFeedPostThread();

  return (
    <div className="feedPost-horizontal-view">
      {
        loading && (
          <LoadingOverlay size="24">
            <div style={{ width: "100vw", height: "70vh" }}></div>
          </LoadingOverlay>
        )
      }
      {
        !loading && !error && (
          <>
            {
              media && (
                <div className="header">
                  <MediaViewer mediaList={media} />
                </div>
              )
            }
            <div className="body">
              <ContentPanel />
            </div>
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

export default HorizontalView;