import { styles } from './styles/index.style'
import { BlockquoteProps } from './types/index.type'

export default function Blockquote({ children, cite }: BlockquoteProps) {
  return (
    <blockquote className={styles.blockquote}>
        {children}
      <footer className={styles.footer}>
        <cite className={styles.cite}>
            {cite}
        </cite>
      </footer>
    </blockquote>
  )
}
