import { CommentsProps } from './types/index.type' 
import { Divider } from 'antd'
import Comment from './components/comment'

export default function Comments({ comments }: CommentsProps) {
  return (
    <>
      <Divider />
      { comments.map(x => (<Comment key={x.timestamp} {...x}/>)) }
    </>
  )
}
