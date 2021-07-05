import { styles } from './styles'
import { routes } from 'client/common/utils/navigation/routes'
import AvatarButton from '../avatar-button'
import { bernard, jeanie, priyanka } from '../../../models'

export default function ProfileNavigation() {
  return (
    <div className={styles.container}>
      <AvatarButton name={bernard.name} navigationPath={routes.profiles.bernard.path} imagePath={bernard.avatar} />
      <AvatarButton name={jeanie.name} navigationPath={routes.profiles.jeanie.path} imagePath={jeanie.avatar} />
      <AvatarButton name={priyanka.name} navigationPath={routes.profiles.priyanka.path} imagePath={priyanka.avatar} />
    </div>
  )
}
