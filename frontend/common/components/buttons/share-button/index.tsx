import { ShareButtonProps } from './types/index.type'
import { ShareAltOutlined } from '@ant-design/icons';
import IconButton from '../icon-button'
import { onShare } from './helpers'

export default function ShareButton({url, title, description, onSuccess, onError}: ShareButtonProps) {
  return (
    <div>
      <IconButton icon={<ShareAltOutlined />} onClick={()=>{onShare(url, title, description, onSuccess, onError)}} />
    </div>
  )
}
