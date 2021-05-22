import { styles } from './styles/index.style'
import { TagProps } from './types/index.type'
import { Tag as AntdTag } from 'antd'

export default function Tag({text}: TagProps) {
  return (
    <AntdTag className={styles.tag}>
      #{text}
    </AntdTag>
  );
}