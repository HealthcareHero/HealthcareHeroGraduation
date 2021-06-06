import { Dispatch, SetStateAction } from "react";

export interface NewFeedPostModalProps {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
