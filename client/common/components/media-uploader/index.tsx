import { useState } from 'react';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import { MediaUploaderProps } from './types/index.type';
import { Upload } from 'antd';
import UploadButton from './components/upload-button'
import PreviewModal from './components/preview-modal'
import { beforeUpload, getBase64, placeholderRequest, showUploadButton } from './helpers'

export default function MediaUploader({ onChange, fileListUpperLimit }: MediaUploaderProps) {
  const [fileList, setFileList] = useState<UploadFile[]>([] as UploadFile[]);
  const [isPreviewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewFile, setPreviewFile] = useState<UploadFile>(null);

  const triggerChange = (changedValue: UploadFile[]): void => {
    const newFileList = [...changedValue];
    onChange?.(newFileList);
    setFileList(newFileList);
  };

  const handleChange = ({ file, fileList }: UploadChangeParam<UploadFile<any>>): void => {
    if (file?.status) {
      triggerChange(fileList);
    }
  }

  const handlePreview = async (file: UploadFile): Promise<void> => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewFile(file);
    setPreviewVisible(true);
  }
  
  return (
    <>
      <Upload
        customRequest={placeholderRequest}
        listType="picture-card"
        fileList={fileList}
        beforeUpload={beforeUpload}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        { showUploadButton(fileList, fileListUpperLimit) ? <UploadButton /> : null }
      </Upload>
      <PreviewModal file={previewFile} isVisible={isPreviewVisible} setVisible={setPreviewVisible} />
    </>
  )
}
