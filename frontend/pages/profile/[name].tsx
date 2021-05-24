import { useRouter } from 'next/router'
import ProfileLanding from 'modules/profile'

export default function Profile() {
  const router = useRouter();

  return (
    <>
      { router.isReady && <ProfileLanding name={router.query.name as string} />}
    </>
  )
}
