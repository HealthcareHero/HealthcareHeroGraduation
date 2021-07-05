import { styles } from './styles'
import { AvatarButtonProps } from './types/index.type'
import Image from 'next/image'
import { Avatar } from 'antd'
import { SIZE } from './constants'

export default function AvatarButton({ navigationPath, imagePath, name }: AvatarButtonProps) {
  return (
    <span className={styles.container}>
      <a href={navigationPath}>
        <div className={styles.content}>
          <Avatar size={SIZE} src={ <Image src={imagePath} width={SIZE} height={SIZE}/> }/>
          <span>{name}</span>
        </div>
      </a>
    </span>
  )
}
