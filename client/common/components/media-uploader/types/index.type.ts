import { UploadFile } from "antd/lib/upload/interface";

export interface MediaUploaderProps {
  value?: UploadFile[];
  onChange?: (value: UploadFile[]) => void;
  fileListUpperLimit?: number;
}
