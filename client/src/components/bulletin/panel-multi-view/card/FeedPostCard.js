import React, { useState } from 'react';
import moment from 'moment';
import HeartButton from '../../../common/button-heart/HeartButton';
import CommentButton from '../../../common/button-comment/CommentButton';
import ShareButon from '../../../common/button-share/ShareButton';
import TagList from '../../../common/tag-list/TagList';
import { path, feedPostThread } from '../../../../utilities/paths';
import { Card } from 'antd';

import 'antd/es/card/style/css';
import './feedPostCard.css';

const { Meta } = Card;

const getActionButtons = (likeBtn, commentBtn, shareBtn) => {
  const actionButtons = [likeBtn];
  if (commentBtn) {
    actionButtons.push(commentBtn);
  }
  actionButtons.push(shareBtn);
  return actionButtons;
}

function FeedPostContent(props) {
  const { message, tags, timestamp } = {...props};
  const messageDisplayLength = 125;
  const tagDisplayLength = 15;

  return (
    <div>
      { message && (message.length > messageDisplayLength ? `${message.slice(0, messageDisplayLength)}...` : message) }
      { tags && <TagList tagList={tags} displayLength={tagDisplayLength}/> }
      <div style={{fontSize: "0.7em"}}>
          { moment(timestamp).fromNow() }
      </div>
    </div>
  );
}

function FeedPostCard(props) {
  const { feedPostId, author, message, media, tags, commenting, initialLikeCount , timestamp } = {...props};
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  return (
    <Card className="feedPost-card"
          cover={ media ? <img src={media[0]} alt="media" /> : false }
          actions={getActionButtons(
            <HeartButton feedPostId={feedPostId} likeCount={likeCount} setLikeCount={setLikeCount} key="button-like" />,
            commenting && <CommentButton path={`${feedPostThread}/${feedPostId}`} key="button-comment"/>,
            <ShareButon url={`${path.root}${feedPostThread}/${feedPostId}`} key="button-share"/>
          )}
    >
      <Meta
        title={author}
        description={<FeedPostContent message={message} tags={tags} timestamp={timestamp}/>}
      />
    </Card>
  );
}

export default FeedPostCard;
