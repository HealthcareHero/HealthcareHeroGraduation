import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FEED_POSTS } from '../../../api/queries';
import LoadingOverlay from '../../common/loading/LoadingOverlay';
import FeedPostCard from './card/FeedPostCard';

const layout = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "75vw",
  marginRight: "auto",
  marginLeft: "auto"
}

function MultiViewPanel() {
  const { loading, error, data } = useQuery(FEED_POSTS);

  return (
    <div className="multi-view-panel" style={layout}>
      {
        loading && (
          <LoadingOverlay size="24">
            <div style={{height: "50vh"}}></div>  
          </LoadingOverlay>
        )
      }
      {
        !loading && data && data.feedPosts.map((item, index) => (
          <FeedPostCard key={index}
                        feedPostId={item.id}
                        author={item.author} 
                        message={item.message} 
                        media={item.media} 
                        tags={item.tags} 
                        commenting={item.commenting}
                        initialLikeCount={item.likeCount} 
                        timestamp={item.timestamp}
          />
        ))
      }
    </div>
  );
}

export default MultiViewPanel;