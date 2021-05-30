import { useState } from 'react';
import { styles } from './styles/index.style'
import { Input as AntdInput } from 'antd';
import AvatarButton from './components/avatar-button'
import PostButton from './components/post-button'

const { TextArea } = AntdInput;

export default function InputComments() {
  const [author, setAuthor] = useState<string>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <AvatarButton name={author} setName={setAuthor} />
        <TextArea autoSize={{ minRows: 1, maxRows: 5 }} bordered={false} />
        <PostButton />
      </div>
    </div>
  )
}
