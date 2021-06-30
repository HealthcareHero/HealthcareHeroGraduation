import styles from './styles/index.module.css'
import { ViewMoreButtonProps } from './types/index.type'

export default function ViewMoreButton({isExpanded, onClick}: ViewMoreButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      { isExpanded ? "view less" : "view more" }
    </button>
  );
}