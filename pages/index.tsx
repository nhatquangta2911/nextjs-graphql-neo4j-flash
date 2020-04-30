import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { GMap } from 'primereact/components/gmap/GMap';

const options = {
  center: { lat: 36.890257, lng: 30.707417 },
  zoom: 12,
};

// the redirect will only happen on the client-side. This is by design,
const Index: React.FC = () => {
  //   const router = useRouter();
  //   React.useEffect(() => {
  //     router.replace('/about');
  //   });
  return (
    <>
      <Head>
        <title>welcome!</title>
      </Head>
      <p>welcome, buddy!</p>
      <Link href='/about'>
        <a>about me</a>
      </Link>
    </>
  );
};

export default Index;
