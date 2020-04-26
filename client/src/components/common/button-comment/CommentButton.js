import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../button-icon/IconButton';
import { CommentOutlined } from '@ant-design/icons';

import './commentButton.css';

function CommentButton(props) {
  const { path } = {...props};

  return (
    <Link to={path} className="comment-button-link">
      <IconButton icon={<CommentOutlined className="comment-button-icon" />} />
    </Link>
  );
}

export default CommentButton;