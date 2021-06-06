import { UploadFile } from "antd/lib/upload/interface";
import { Dispatch, SetStateAction } from "react";

export interface MediaUploaderProps {
  value?: UploadFile[];
  onChange?: (value: UploadFile[]) => void;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
  fileListUpperLimit?: number;
}
