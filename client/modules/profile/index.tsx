import { ProfileLandingProps } from './types/index.type'
import { getProfile } from './helpers'
import PageNotFound from 'client/modules/page-not-found'

export default function ProfileLanding({ name }: ProfileLandingProps) {
  const profile = getProfile(name);

  return (
    <>
      { profile ? profile.component() : <PageNotFound />}
    </>
  )
}
