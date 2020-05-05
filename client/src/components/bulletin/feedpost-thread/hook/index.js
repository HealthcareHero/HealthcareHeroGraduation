import { React, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FeedPostThreadContext } from '../context';
import { actionType } from '../action/actionType';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../../../api/mutations';

import { openNotification } from '../../../../utilities/notificationSnackbar';
import { FrownOutlined } from '@ant-design/icons';

const errorNotificationStyle = {
  backgroundColor: "#EC4C47"
}

export const useFeedPostThread = () => {
  const { state, dispatch } = useContext(FeedPostThreadContext);
  const [ addComment ] = useMutation(ADD_COMMENT);
  const history = useHistory();

  const updateLikeCount = (likeCount) => {
    dispatch({
      type: actionType.updateLikeCount,
      payload: { likeCount }
    });
  }

  const updateInputText = (text) => {
    dispatch({
      type: actionType.updateInputText,
      payload: {
        inputText: text
      }
    })
  }

  const updateSubmitStatus = (status) => {
    dispatch({
      type: actionType.submittingComment,
      payload: {
        submitting: status
      }
    })
  }

  const submitComment = (author, message) => {
    updateSubmitStatus(true);
    addComment({
      variables: {
        feedPostId: state.feedPostId,
        author,
        message
      }
    }).then(response => {
      updateSubmitStatus(false);
      history.go();
    }, error => {
      updateSubmitStatus(false);
      openNotification("Oops!", "Something went wrong. Please try again.", <FrownOutlined />, errorNotificationStyle);
    });
  }

  return {
    ...state,
    updateLikeCount,
    updateInputText,
    submitComment
  }
}