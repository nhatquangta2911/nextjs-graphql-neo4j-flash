import React from 'react';
import Head from 'next/head';
import { Spinner } from 'primereact/spinner';
import { PageWrapper } from 'styled/pages.style';

//TODO: Static File Serving - in /public folder
const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <PageWrapper>
        <Spinner value={20} />
        <p>i'm Shawn</p>
      </PageWrapper>
      {/* <img src='/banner.png' alt='Banner' width={200} /> */}
    </>
  );
};

export default AboutPage;
