import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import IconButton from '../icon-button'

export default function LikeButton() {
  return (
    <div>
      <IconButton icon={<HeartFilled className="heart-button-icon-filled" />} onClick={()=>{}} />
    </div>
  )
}
