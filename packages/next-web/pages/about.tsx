import React from 'react';
import Head from 'next/head';
import { PageWrapper } from 'styled/pages.style';
import { DropDownButton } from '@progress/kendo-react-buttons';
import { withRouter } from 'next/router';

//TODO: Static File Serving - in /public folder
const menuItems = [
  {
    actionName: 'Undo',
    icon: 'undo',
    route: 'posts/1',
  },
  {
    actionName: 'Redo',
    icon: 'redo',
    disabled: true,
    route: '/posts/2',
  },
  {
    actionName: 'Cut',
    icon: 'cut',
    route: '/posts/3',
  },
  {
    actionName: 'Copy',
    icon: 'copy',
    route: '/posts/4',
  },
  {
    actionName: 'Paste',
    icon: 'paste',
    route: '/posts/paste',
  },
];

const AboutPage = ({ router }) => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <PageWrapper>
        <p>i'm Shawn</p>
        <DropDownButton
          items={menuItems}
          textField='actionName'
          text='User Settings'
          onItemClick={(item) => {
            router.push('/posts/[id]', menuItems[item.itemIndex].route);
          }}
        />
      </PageWrapper>
      {/* <img src='/banner.png' alt='Banner' width={200} /> */}
    </>
  );
};

export default withRouter(AboutPage);
