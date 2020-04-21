import React, { useState } from 'react';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import 'antd/es/upload/style/css';
import 'antd/es/modal/style/css';
import 'antd/es/message/style/css';
import './mediaUploader.css';

const mediaListUpperLimit = 2;

message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
});

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const beforeUpload = file => {
  const isValidFileType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
  if (!isValidFileType) {
    message.error('You can only upload JPG/PNG/GIF file!');
  }

  const isValidSize = file.size / 1024 / 1024 < 2;
  if (!isValidSize) {
    message.error('Image must smaller than 2MB!');
  }
  return isValidFileType && isValidSize;
}


function UploadButton() {
  return (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  )
};

function MediaUploader(props) {
  const { onUploading, onUpdateList, mediaList } = { ...props };
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewMedia, setPreviewMedia] = useState('');

  const handleCancel = () => {
    setPreviewVisible(false);
  }

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewMedia(file.url || file.preview);
    setPreviewVisible(true);
  }

  const handleChange = ({ file, fileList, event }) => {
    if (file.status) {
      onUploading(true);
      onUpdateList(fileList);

      if (file.status === 'done' || file.status ==='removed') {
        onUploading(false);
      }
    }
  }

  // To prevent false negative upload failure due to missing action property in <Upload />
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout (() => {
      onSuccess("ok");
    }, 0);
  }

  return (
    <>
      <Upload
        customRequest={dummyRequest}
        listType="picture-card"
        fileList={mediaList}
        beforeUpload={beforeUpload}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {mediaList.length >= mediaListUpperLimit ? null : <UploadButton />}
      </Upload>

      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="preview" style={{ width: '100%' }} src={previewMedia} />
      </Modal>
    </>
  );
}

export default MediaUploader;