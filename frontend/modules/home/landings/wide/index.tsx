import Head from 'next/head'
import { routes } from 'common/utils/navigation/routes'
import { Skeleton } from 'antd'
import { useTestDragons } from 'common/data-access/services/google-cloud-functions/test-query/dragons'

export default function Wide() {
  const { data, isLoading, isError } = useTestDragons();

  return (
    <div>
      Wide

      
    </div>
  );
}
