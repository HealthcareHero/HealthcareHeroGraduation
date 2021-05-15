import Head from 'next/head'
import { routes } from 'common/utils/navigation/routes'
import { Skeleton } from 'antd'
import { useTestDragons } from 'common/data-access/services/google-cloud-functions/test-query/dragons'

export default function Narrow() {
  const { data, isLoading, isError } = useTestDragons();

  return (
    <div>
      <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing{" "}
          <code>pages/index.js</code>
        </p>

        {isLoading && <Skeleton active paragraph={{ rows: 4 }} title={false} />}

        {!isLoading &&
          !isError &&
          data.map((x, i) => <p key={i}>{x.author}</p>)}
    </div>
  );
}
