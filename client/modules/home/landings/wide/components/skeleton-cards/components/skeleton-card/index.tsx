import { styles } from './styles/index.style'
import { Card } from 'antd'
import { HeartOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons'

const { Meta } = Card;

export default function SkeletonCard() {
  
  return (
    <Card className={styles.card}
      loading
      actions={[
        <HeartOutlined />,
        <CommentOutlined />,
        <ShareAltOutlined />
      ]}
    >
      <Meta
        title="Loading"
        description="Loading"
      />
    </Card>
  );
}
