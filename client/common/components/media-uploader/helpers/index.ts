import { message } from 'antd'
import { RcFile } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface';
import { UploadRequestOption } from 'rc-upload/lib/interface';
import { IMAGE_MAX_SIZE_IN_MB } from 'common/constants'

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
  return file.size / 1024 / 1024 < IMAGE_MAX_SIZE_IN_MB;
}

export const beforeUpload = (file: RcFile): boolean => {
  const isValidType = isValidFileType(file);
  const isValidSize = isValidFileSize(file);

  if (!isValidType) {
    message.error("You can only upload JPG/PNG/GIF file!");
  } else if (!isValidSize) {
    message.error(`Image must smaller than ${IMAGE_MAX_SIZE_IN_MB}MB!`);
  }

  return isValidType && isValidSize;
}

/* To prevent false negative upload failure due to missing action property in <Upload /> */
export const placeholderRequest = ({ onSuccess }: UploadRequestOption) => {
  setTimeout (() => {
    onSuccess("ok", {} as XMLHttpRequest);
  }, 0);
}
