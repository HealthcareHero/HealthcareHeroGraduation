export interface ShareButtonProps {
  url: string;
  title: string;
  description: string;
  onSuccess: () => void;
  onError: () => void;
}
