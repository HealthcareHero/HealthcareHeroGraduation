import { styles } from './styles/index.style'
import { TagProps } from './types/index.type'
import { Tag as AntdTag } from 'antd'
import { prefixTagWithHash } from './helpers'

export default function Tag({ text, isRemovable: isClosable = false, onRemove: onRemove }: TagProps) {
  return (
    <AntdTag className={styles.tag} closable={isClosable} onClose={onRemove}>
      { prefixTagWithHash(text) }
    </AntdTag>
  );
}