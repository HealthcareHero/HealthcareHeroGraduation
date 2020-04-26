import React from 'react';
import { Carousel } from 'antd';
import 'antd/es/carousel/style/css';

function MediaViewer(props) {
  const { mediaList, autoplay, loading, alt} = {...props};
  return (
    <Carousel autoplay={autoplay}>
      {
        mediaList.map((item, index) => {
          return (
            <div key={index} className="image-container">
              <img src={item} alt={alt} loading={loading}/>
            </div>
          )
        })
      }
    </Carousel>
  );
}

export default MediaViewer;
