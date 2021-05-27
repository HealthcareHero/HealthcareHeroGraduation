import { styles } from './styles/index.style'
import Link from 'next/link'
import { CommentButtonProps } from './types/index.type'
import { CommentOutlined } from '@ant-design/icons';

export default function CommentButton({ url }: CommentButtonProps) {
  return (
    <div className={styles.button}>
      <Link href={url}>
        <CommentOutlined />
      </Link>
    </div>
  )
}
