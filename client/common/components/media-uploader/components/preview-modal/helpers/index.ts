import { UploadFile } from "antd/lib/upload/interface";

export const getTitle = (file: UploadFile): string => {
  return file?.name || file?.url.substring(file.url.lastIndexOf('/') + 1)
}