import React from 'react';
import Head from 'next/head';
import { Spinner } from 'primereact/spinner';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const AboutPage = ({ greeting }) => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Spinner value={20} />
    </>
  );
};

export default AboutPage;
