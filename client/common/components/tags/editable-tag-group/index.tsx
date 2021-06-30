import { useState } from 'react';
import { styles } from './styles/index.style'
import { EditableTagGroupProps } from './types/index.type'
import { Input, Tag as AntdTag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Tag from '../common/components/tag'
import { allowAddTag, isUniqueTag, isTagLengthWithinLimit } from './helpers'

export default function EditableTagGroup({ onChange }: EditableTagGroupProps) {
  const [tags, setTags] = useState<string[]>([] as string[]);
  const [inputValue, setInputValue] = useState<string>(null);
  const [isInEditMode, setInEditMode] = useState<boolean>(false);

  const triggerChange = (newTags: string[]): void => {
    onChange?.(newTags);
    setTags(newTags);
  }

  const enterEditMode = (): void => {
    setInEditMode(true);
  }

  const handleEditChange = ({ target: { value }}): void => {
    if (isTagLengthWithinLimit(value)) {
      setInputValue(value);
    }
  }

  const handleAdd = (): void => {
    if (inputValue && isUniqueTag(tags, inputValue)) {
      triggerChange([...tags, inputValue]);
    }
    setInputValue(null);
    setInEditMode(false);
  }

  const handleRemove = (removedTag: string, e: MouseEvent): void => {
    e.preventDefault();
    triggerChange([...tags.filter((tag) => tag !== removedTag)]);
  }

  return (
    <div>
      {
        tags.map((tag, index) => <Tag text={tag} isRemovable={true} onRemove={(e) => handleRemove(tag, e)} key={index} />)
      }
      {
        allowAddTag(tags)
          ? isInEditMode ? <Input
                                type="text"
                                size="small"
                                autoFocus
                                style={styles.inline.input}
                                value={inputValue}
                                onChange={handleEditChange}
                                onBlur={handleAdd}
                                onPressEnter={handleAdd}
                              />
                        : <AntdTag onClick={enterEditMode}>
                            <PlusOutlined /> New Tag
                          </AntdTag>
        : null
      }
    </div>
  )
}