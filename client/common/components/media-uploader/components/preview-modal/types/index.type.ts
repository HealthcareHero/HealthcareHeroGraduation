import { Dispatch, SetStateAction } from "react";
import { UploadFile } from "antd/lib/upload/interface";

export interface PreviewModalProps {
  file: UploadFile;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
