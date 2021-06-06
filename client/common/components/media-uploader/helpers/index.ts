import { message } from 'antd'
import { RcFile } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface';
import { UploadRequestOption } from 'rc-upload/lib/interface';

export const showUploadButton = (fileList: UploadFile[], fileListUpperLimit?: number): boolean => {
  if (!fileListUpperLimit) {
    return true;
  }
  return fileList.length < fileListUpperLimit
}

export const isValidFileType = (file: RcFile): boolean => {
  return file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif";
}

export const isValidFileSize = (file: RcFile): boolean => {
  return file.size / 1024 / 1024 < 2;
}

export const beforeUpload = (file: RcFile): boolean => {
  const isValidType = isValidFileType(file);
  const isValidSize = isValidFileSize(file);

  if (!isValidType) {
    message.error("You can only upload JPG/PNG/GIF file!");
  } else if (!isValidSize) {
    message.error("Image must smaller than 2MB!");
  }

  return isValidType && isValidSize;
}

export const getBase64 = (file: RcFile): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

/* To prevent false negative upload failure due to missing action property in <Upload /> */
export const placeholderRequest = ({ onSuccess }: UploadRequestOption) => {
  setTimeout (() => {
    onSuccess("ok", {} as XMLHttpRequest);
  }, 0);
}
