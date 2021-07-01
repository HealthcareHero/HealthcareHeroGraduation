import { styles } from './styles'
import { AvatarButtonProps } from './types/index.type'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar } from 'antd'
import { SIZE } from './constants'

export default function AvatarButton({ navigationPath, imagePath }: AvatarButtonProps) {
  return (
    <span className={styles.container}>
      <Link href={navigationPath}>
        <Avatar size={SIZE} src={ <Image src={imagePath} width={SIZE} height={SIZE}/> }/>
      </Link>
    </span>
  )
}
