import ProfileLanding from 'modules/profile'
import { bernard, jeanie } from 'modules/profile/common/models'

export default function Profile({ name }) {
  return <ProfileLanding name={name} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: bernard.pagePathSuffix } },
      { params: { name: jeanie.pagePathSuffix } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const name = params.name;

  return { props: { name } };
}
