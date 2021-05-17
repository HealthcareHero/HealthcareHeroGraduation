import { TagProps } from './types/index.type'
import { Tag as AntdTag } from 'antd'
import { MARGIN_BOTTOM } from './constants'

export default function Tag({text}: TagProps) {
  return (
    <AntdTag style={{marginBottom: MARGIN_BOTTOM }}>
      #{text}
    </AntdTag>
  );
}