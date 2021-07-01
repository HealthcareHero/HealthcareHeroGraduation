import { ProfileSelectionProps } from './index.type'
import ProfileNavigation from './components/profile-navigation'
import HtmlHead from 'client/common/components/html-head'

export default function ProfileSelection({children, name, description}: ProfileSelectionProps) {
  return (
    <>
      <HtmlHead title={name} description={description} />
      <ProfileNavigation />
      <div>{children}</div>
    </>
  )
}
