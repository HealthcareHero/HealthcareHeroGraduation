import { useState } from 'react';
import { NameModalProps } from './types/index.type'
import { Modal, Input } from 'antd';

export default function NameModal({ name, show, onSave, onCancel }: NameModalProps) {
  const [newName, setNewName] = useState<string>(name);

  const handleChange = ({target: { value }}) => {
    setNewName(value)
  }

  return (
    <Modal
      title="May I have your name?"
      visible={show}
      okText="Save"
      onOk={() => onSave(newName)}
      onCancel={onCancel}
      closable={false}
    >
      <Input defaultValue={name} onChange={handleChange} />
    </Modal>
  )
}
