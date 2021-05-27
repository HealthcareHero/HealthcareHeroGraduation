import { styles } from './styles/index.style'
import { ShareButtonProps } from './types/index.type'
import { ShareAltOutlined } from '@ant-design/icons';
import { onShare } from './helpers'

export default function ShareButton({url, title, description, onSuccess, onError}: ShareButtonProps) {
  return (
    <div className={styles.button} onClick={()=>{onShare(url, title, description, onSuccess, onError)}}>
      <ShareAltOutlined />
    </div>
  )
}
