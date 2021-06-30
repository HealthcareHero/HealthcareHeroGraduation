import { useRouter } from 'next/router'
import Bernard from 'client/modules/profile/components/bernard'
import { useEffect } from 'react';
import { routes } from 'client/common/utils/navigation/routes'

export default function ProfileRoot() {
  const router = useRouter();

  useEffect(() => {
    router.replace(routes.profiles.bernard.path);
  }, [router.isReady])

  return (
    <Bernard />
  )
}
