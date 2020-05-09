import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { PageWrapper } from 'styled/pages.style';

// the redirect will only happen on the client-side. This is by design,
const Index: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/tracking');
  });
  return (
    <>
      <Head>
        <title>welcome!</title>
      </Head>
      <PageWrapper>
        <p>welcome, buddy!</p>
        <Link href='/about'>
          <a>about me</a>
        </Link>
      </PageWrapper>
    </>
  );
};

export default Index;
