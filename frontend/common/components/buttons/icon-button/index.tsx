import { IconButtonProps } from './types/index.type'
import { Button } from 'antd'

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <Button icon={icon} onClick={onClick} />
  )
}
