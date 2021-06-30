import { message } from 'antd';

export const copyToClipboard = (text: string): void => {
  const hiddenField = document.createElement('textarea');
  hiddenField.setAttribute('readonly', '');
  // hiddenField.display = "none";
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

export const onShare = (url: string, title: string, description: string, onSuccess: () => void, onError: () => void): void => {
  if (navigator.share) {
    navigator.share({
      url,
      title,
      text: description
    }).then(() => {
      onSuccess();
    }).catch((error) => {
      console.log(error);
      // onError();
    }) 
  }
  else {
    copyToClipboard(url);
    message.success('Copied Successfully!');
  }
}