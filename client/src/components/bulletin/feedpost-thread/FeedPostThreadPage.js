import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../common/navbar/NavBar';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FEED_POST } from '../../../api/queries';
import { ADD_COMMENT } from '../../../api/mutations';

import FeedPost from '../feedpost/FeedPost';

import LoadingOverlay from '../../common/loading/LoadingOverlay';
import Comments from './Comments';
import InputWithSubmit from '../../common/input-with-submit/InputWithSubmit';
import { openNotification } from '../../../utilities/notificationSnackbar';
import { FrownOutlined } from '@ant-design/icons';

import './feedPostThreadPage.css';

const errorNotificationStyle = {
  backgroundColor: "#EC4C47"
}

function FeedPostThreadPage(props) {
  const feedPostId = props.match.params.feedPostId;
  const [addComment] = useMutation(ADD_COMMENT);
  const { loading, error, data } = useQuery(FEED_POST, {
    variables: {
      id: feedPostId
    }
  });

  // let loading = false;
  // let error = "none";
  // let data = {
  //   feedPost: {
  //     author: "test author",
  //     media: "test media",
  //     message: "test message",
  //     tags: ["test"],
  //     timestamp: null,
  //     comments: null,
  //     likeCount: 0
  //   }
  // };

  const { author, media, message, tags, timestamp, comments } = data ? {...data.feedPost} : {};
  const initialLikeCount = data ? data.feedPost.likeCount : 0;
  
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLikeCount(initialLikeCount);
  }, [initialLikeCount])

  console.log(data)

  const onSubmit = (author, message) => {
    setSubmitting(true);
    addComment({
      variables: {
        feedPostId,
        author,
        message
      }
    }).then(response => {
      setSubmitting(false);
      history.go();
    }, error => {
      setSubmitting(false);
      openNotification("Oops!", "Something went wrong. Please try again.", <FrownOutlined />, errorNotificationStyle);
    });
  }

  return (
    <div className="comment-page">
      <NavBar title="Feed Post" enableBackButton enableMenu />
      {
        loading && (
          <LoadingOverlay size="24">
            <div style={{height: "100vh"}}></div>  
          </LoadingOverlay>
        )
      }
      {
        !loading && data && (
          <>
            <FeedPost id={feedPostId} 
                        author={author} 
                        message={message} 
                        media={media} 
                        tags={tags} 
                        
                        initialLikeCount={likeCount} 
                        timestamp={timestamp} />

            { 
              comments && <div style={{paddingLeft: "8px", paddingRight:"8px"}}>
                            <Comments comments={comments} />
                          </div>
            }

            <div style={{paddingLeft:"8px", paddingRight:"8px", marginTop: "8px", position:"sticky", bottom: "8px"}} >
              <InputWithSubmit loading={submitting} onSubmit={onSubmit} />
            </div>
          </>
        )
      }
    </div>
  );
}

export default FeedPostThreadPage;