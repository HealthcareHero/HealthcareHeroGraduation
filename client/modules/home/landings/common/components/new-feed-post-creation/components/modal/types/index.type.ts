import { Dispatch, SetStateAction } from "react";
import { UploadFile } from "antd/lib/upload/interface";

export interface NewFeedPostModalProps {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export type FormValues = {
  author?: string | null;
  recipient: string;
  message: string;
  tags: string[] | null;
  enableComment: boolean;
  media: UploadFile[] | null;
}
