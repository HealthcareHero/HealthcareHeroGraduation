import React, { useState } from 'react';
import moment from 'moment';
import MediaViewer from '../../common/carousel-media/MediaViewer';
import ExpansionTextPanel from '../../common/expansion-text-panel/ExpansionTextPanel';
import TagList from '../../common/tag-list/TagList';
import HeartButton from '../../common/button-heart/HeartButton';
import CommentButton from '../../common/button-comment/CommentButton';
import ShareButon from '../../common/button-share/ShareButton';

import 'antd/es/button/style/css';
import './feedPost.css';

import { path, feedPostThread } from '../../../utilities/paths';

const tagDisplayLength = 15;
const messageDisplayLength = 125;

function FeedPost(props) {
  const { id, author, message, media, tags, commenting, initialLikeCount , timestamp } = {...props};
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  return (
    <div className="feedPost">
      { media && media.length>0 && <MediaViewer mediaList={media} loading="lazy" /> }

      <div className="content">
        <div className="header">
          <div className="author">
            <b>{author}</b>
          </div>
          <div className="timestamp">
            { moment(timestamp).fromNow() }
          </div>
        </div>

        { message && <div className="message"><ExpansionTextPanel text={message} displayLength={messageDisplayLength} /></div> }

        { tags && tags.length>0 && <TagList tagList={tags} displayLength={tagDisplayLength} /> }
      </div>

      <div className="icon-buttons">
        <HeartButton feedPostId={id} likeCount={likeCount} setLikeCount={setLikeCount} />

        { commenting && <CommentButton path={`${feedPostThread}/${id}`} /> }
        
        <ShareButon url={`${path.root}${feedPostThread}/${id}`}/>

        { (likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div> }
      </div>     
    </div>
  );
}

export default FeedPost;
