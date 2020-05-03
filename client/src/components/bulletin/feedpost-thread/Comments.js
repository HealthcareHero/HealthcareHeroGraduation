import React, { Fragment } from 'react';
import moment from 'moment';
import { Divider } from 'antd';

function Comment(props) {
  const { author, message, timestamp }= {...props};
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <span><b>{author}</b></span>
      <span>{message}</span>
      <div style={{fontSize: "0.7em", marginTop:"1em"}}>
        { timestamp }
      </div>
    </div>
  );
}

function Comments(props) {
  const { comments } = {...props};
  return (
    <div className="comment-container">
      {
        comments.map((comment, index) => {
          const { author, message, timestamp } = {...comment};
          return (
            <Fragment key={index}>
              <Divider />
              <Comment author={author} message={message} timestamp={moment(timestamp).fromNow()} />
            </Fragment>
          );
        })
      }
    </div>
  )
}

export default Comments;