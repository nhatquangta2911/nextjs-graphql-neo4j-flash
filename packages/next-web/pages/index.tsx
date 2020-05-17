import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import {
  PageWrapper,
  HomeRouteSection,
  NavigateRouteSection,
  ContentRouteSection,
} from 'styled/pages.style';
import { IPageTrackingState } from './tracking/tracking.reducer';

interface MainPageProps {}

const Index: React.FC<MainPageProps> = () => {
  const [username, setUsername] = useState('');
  const newestTask: string = useSelector(
    (state: IPageTrackingState) => state?.newestTask
  );
  React.useEffect(() => {
    setUsername(localStorage.getItem('username'));
  });
  return (
    <>
      <Head>
        <title>welcome {username}!</title>
      </Head>
      <PageWrapper>
        <HomeRouteSection>
          <p>welcome {username}!</p>
        </HomeRouteSection>
        <ContentRouteSection>
          <h1>TASKS</h1>
          <p>
            Newest Task: "<strong>{newestTask}</strong>"
          </p>
        </ContentRouteSection>
        <NavigateRouteSection>
          <Link href='/tracking'>
            <a>tracking</a>
          </Link>
          <Link href='/study'>
            <a>study</a>
          </Link>
          <Link href='/about'>
            <a>about me</a>
          </Link>
        </NavigateRouteSection>
      </PageWrapper>
    </>
  );
};

export default Index;
