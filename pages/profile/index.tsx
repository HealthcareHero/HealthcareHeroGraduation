import { useRouter } from 'next/router'
import Bernard from 'modules/profile/components/bernard'
import { useEffect } from 'react';
import { routes } from 'common/utils/navigation/routes'

export default function ProfileRoot() {
  const router = useRouter();

  useEffect(() => {
    router.replace(routes.profiles.bernard.path);
  }, [router.isReady])

  return (
    <Bernard />
  )
}
