import { Dispatch, SetStateAction } from "react";

export interface AvatarButtonProps {
  name: string | null;
  setName: Dispatch<SetStateAction<string>>;
}
