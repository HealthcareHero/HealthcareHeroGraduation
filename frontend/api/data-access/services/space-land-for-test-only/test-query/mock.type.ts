export interface Dragon {
  id: string;
  author: string;
  recipient: string;
  message: string | null;
  media: string[] | null;
  tags: string[] | null;
  enableComment: boolean,
  likeCount: number;
  timestamp: string;
}
