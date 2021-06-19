export interface CreateFeedPostArgument {
  author: string;
  recipient: string;
  message: string;
  media?: string[] | null;
  tags?: string[] | null;
  enableComment: boolean;
}
