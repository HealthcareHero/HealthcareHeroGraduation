import Head from "next/head";
// import { routes } from "common/utils/navigation/routes";
// import { Skeleton } from "antd";
// import { useTestDragons } from "common/data-access/services/google-cloud-functions/test-query/dragons";

// export default function Home() {
//   const { data, isLoading, isError } = useTestDragons();

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>{routes.home.title}</title>
//         <meta name="description" content={routes.home.description} />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         {isLoading && <Skeleton active paragraph={{ rows: 4 }} title={false} />}

//         {!isLoading &&
//           !isError &&
//           data.map((x, i) => <p key={i}>{x.author}</p>)}
//       </main>
//     </div>
//   );
// }

export default function TestPage() {
  return (
    <div>
      Test Page
    </div>
  );
}