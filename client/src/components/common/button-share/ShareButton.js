import React from 'react';
import IconButton from '../button-icon/IconButton';
import { ShareAltOutlined } from '@ant-design/icons';
import { message } from 'antd';

import 'antd/es/message/style/css';

const copyToClipboard = (text) => {
  const hiddenField = document.createElement('textarea');
  hiddenField.setAttribute('readonly', '');
  hiddenField.display = "none";
  hiddenField.value = text;
  document.body.appendChild(hiddenField);
  const previousSelectedElement = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  hiddenField.select();
  document.execCommand('Copy');
  document.body.removeChild(hiddenField);
  if (previousSelectedElement) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(previousSelectedElement);
  }
}

function ShareButton(props) {
  const { url } = {...props};

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url,
        text: "Let's congratulate and support the healthcare heros!\n"
      }).then(() => {
        message.success('Thank you for sharing!');
      }).catch(console.error)
    }
    else {
      copyToClipboard(url);
      message.success('Copied Successfully!');
    }
  }

  return (
    <IconButton icon={<ShareAltOutlined className="share-button-icon" />} onClick={handleShare}/>
  );
}

export default ShareButton;