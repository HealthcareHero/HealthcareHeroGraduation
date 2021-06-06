import { PreviewModalProps } from './types/index.type'
import { Modal } from 'antd';
import { getTitle } from './helpers'

export default function PreviewModal({ file, isVisible, setVisible }: PreviewModalProps) {
  const handleCancel = (): void => {
    setVisible(false);
  }

  return (
    <Modal
      visible={isVisible}
      title={getTitle(file)}
      footer={null}
      onCancel={handleCancel}
    >
      <img alt="preview" style={{ width: '100%' }} src={file?.preview || file?.url} />
    </Modal>
  )
}