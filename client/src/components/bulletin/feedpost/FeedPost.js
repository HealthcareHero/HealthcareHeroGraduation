import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import MediaViewer from '../../common/carousel-media/MediaViewer';
import ExpansionTextPanel from '../../common/expansion-text-panel/ExpansionTextPanel';
import TagList from '../../common/tag-list/TagList';
import IconButton from '../../common/button-icon/IconButton';
import HeartButton from '../../common/button-heart/HeartButton';
import ShareButon from '../../common/button-share/ShareButton';

import { CommentOutlined } from '@ant-design/icons';

import 'antd/es/button/style/css';
import './feedPost.css';

import { path, feedPostThread } from '../../../utilities/paths';

const tagDisplayLength = 15;
const messageDisplayLength = 125;

function FeedPost(props) {
  const { id, author, message, media, tags, commenting, initialLikeCount , timestamp } = {...props};
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  return (
    <div className="feedpost">
      { media && <div className="feedPost-media"><MediaViewer mediaList={media} loading="lazy" /></div> }
      
      <div className="icon-buttons">
        <HeartButton feedPostId={id} likeCount={likeCount} setLikeCount={setLikeCount} />

        {
          commenting && <Link to={`${feedPostThread}/${id}` }>
                          <IconButton icon={<CommentOutlined style={{ fontSize: '20px' }} />} />
                        </Link>
        }
        
        <ShareButon url={`${path.root}${feedPostThread}/${id}`}/>

        { (likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div> }
      </div>

      <div className="content">
        <div className="author"><b>{author}</b></div>

        {/* { message && <div className="message">{message}</div> } */}
        { message && <div className="message"><ExpansionTextPanel text={message} displayLength={messageDisplayLength} /></div> }

        { tags && <TagList tagList={tags} displayLength={tagDisplayLength} /> }

        <div className="timestamp" style={{fontSize: "0.7em"}}>
          { moment(timestamp).fromNow() }
        </div>
      </div>     
    </div>
  );
}

export default FeedPost;
