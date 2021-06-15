export interface CreateFeedPostArgument {
  author: string;
  recipient: string;
  message: string;
  media?: null;
  tags?: string[] | null;
  enableComment: boolean;
}
