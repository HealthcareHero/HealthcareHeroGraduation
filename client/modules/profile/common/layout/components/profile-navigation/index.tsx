import { styles } from './styles'
import { routes } from 'client/common/utils/navigation/routes'
import AvatarButton from '../avatar-button'
import { bernard, jeanie, yanka } from '../../../models'

export default function ProfileNavigation() {
  return (
    <div className={styles.container}>
      <AvatarButton navigationPath={routes.profiles.bernard.path} imagePath={bernard.avatar} />
      <AvatarButton navigationPath={routes.profiles.jeanie.path} imagePath={jeanie.avatar} />
      <AvatarButton navigationPath={routes.profiles.yanka.path} imagePath={yanka.avatar} />
    </div>
  )
}
