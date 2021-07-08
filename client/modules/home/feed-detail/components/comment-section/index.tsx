import { CommentSectionProps } from './types/index.type' 
import { Divider } from 'antd'
import CommentDisable from './components/comment-disable'
import CommentEmpty from './components/comment-empty'
import Comment from './components/comment'

export default function CommentSection({ enable, comments, showTopDivider }: CommentSectionProps) {
  return (
    <>
      { showTopDivider && <Divider /> }
      {
        !enable ? <CommentDisable />
        : (!comments || comments?.length <=0) ? <CommentEmpty />
        : comments.map(x => (<Comment key={x.timestamp} {...x}/>))
      }
    </>
  )
}
