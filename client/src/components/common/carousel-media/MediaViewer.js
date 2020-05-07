import React from 'react';
import { Carousel } from 'antd';
import 'antd/es/carousel/style/css';
import './mediaViewer.css';

function MediaViewer(props) {
  const { mediaList, autoplay, loading, alt} = {...props};
  return (
    <Carousel autoplay={autoplay} className="media-viewer">
      {
        mediaList.map((item, index) => {
          return (
            <img src={item} alt={alt} loading={loading}/>
          )
        })
      }
    </Carousel>
  );
}

export default MediaViewer;
