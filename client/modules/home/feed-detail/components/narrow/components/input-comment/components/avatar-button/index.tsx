import { styles } from './styles/index.style'
import { useState } from 'react';
import { Avatar, message } from 'antd';
import NameModal from './components/name-modal'
import { UserOutlined } from '@ant-design/icons';
import { UserAddOutlined } from '@ant-design/icons';
import { AvatarButtonProps } from './types/index.type'

export default function AvatarButton({ name, setName }: AvatarButtonProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleSaveModal = (name: string) => {
    setShowModal(false);
    setName(name);
    message.success(`Hi ${name}`, 1);
  }

  const handleCancelModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className={styles.avatar} onClick={handleClick}>
        { 
          name 
          ? <Avatar icon={<UserOutlined />} />
          : <Avatar icon={<UserAddOutlined />} /> 
        }
      </div>
      <NameModal name={name} show={showModal} onSave={handleSaveModal} onCancel={handleCancelModal} />
    </>
  )
}
