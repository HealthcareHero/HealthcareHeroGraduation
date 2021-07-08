import { UseGetFeedPostResponse } from 'client/data-access/execute/feed/getFeedPost/index.type'
import { FeedPost, Comment } from 'client/data-access/execute/feed/common/types/index.type'

export type FeedPostProps = UseGetFeedPostResponse;
export type FeedDetailContentProps = FeedPost;

export type FeedDetailCommentProps = FeedDetailComment;
export type FeedDetailComment = Comment;

