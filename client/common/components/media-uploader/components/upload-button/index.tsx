import { styles } from './styles/index.style'
import { PlusOutlined } from '@ant-design/icons';

export default function UploadButton() {
  return (
    <div>
      <PlusOutlined />
      <div style={styles.inline.buttonText}>Upload</div>
    </div>
  )
}
