import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FEED_POSTS } from '../../../api/queries';
import { Divider } from 'antd';

import LoadingOverlay from '../../common/loading/LoadingOverlay';
import FeedPost from '../feedpost/FeedPost';

import 'antd/es/divider/style/css'; 

function SingleViewPanel() {
  const { loading, error, data } = useQuery(FEED_POSTS);
  // let loading = true;
  // let error = "none";
  // let data = {};


  console.log("loading: ", loading)
  console.log("error: ", error)

  return (
    <div className="single-view-panel">
      {
        loading && (
          <LoadingOverlay size="24">
            <div style={{height: "50vh"}}></div>  
          </LoadingOverlay>
        )
      }
      {
        !loading && data && data.feedPosts.map((item, index) => {
          return (
            <Fragment key={index}>
              { index !==0 && <Divider />}
              <FeedPost id={item.id} 
                        author={item.author} 
                        message={item.message} 
                        media={item.media} 
                        tags={item.tags} 
                        commenting={item.commenting}
                        initialLikeCount={item.likeCount} 
                        timestamp={item.timestamp} />
            </Fragment>
          )
        })
      }
    </div>
  );
}

export default SingleViewPanel;
