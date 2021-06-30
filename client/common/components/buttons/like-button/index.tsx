import { styles } from './styles/index.style'
import { useState } from 'react'
import { LikeButtonProps } from './types/index.type'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

export default function LikeButton({ count, onClick }: LikeButtonProps) {
  const [isFilled, setFill] = useState(false);

  const handleClick = (): any => {
    let isFilledCurrently = isFilled;
    let currentCount = count;
    setFill(!isFilledCurrently)
    onClick && onClick(isFilledCurrently ? --currentCount : ++currentCount);
    // TODO: Perform API calls to increase/decrease like count
  }
  
  return (
    <div className={styles.button} onClick={handleClick}>
      { isFilled ? <HeartFilled style={styles.inline.filled} /> : <HeartOutlined style={styles.inline.outlined} /> }
    </div>
  )
}
