import { styles } from './styles/index.style'
import { TextVisualViewerProps } from './types/index.type'

export default function TextVisualViewer({ text }: TextVisualViewerProps ) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
