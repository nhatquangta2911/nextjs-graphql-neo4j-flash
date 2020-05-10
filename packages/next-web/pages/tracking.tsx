import React from 'react';
import Head from 'next/head';
import {
  PageWrapper,
  HeaderSection,
  ContentSection,
  FooterSection,
  LeftContentSection,
  RightContentSection,
  UpperLeftContentSection,
  LowerLeftContentSection,
} from 'styled/pages.style';
import { TabView, TabPanel } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';
import {
  Tracking as TrackingContainer,
  TaskList as TaskListContainer,
} from '../containers';
import { User, TaskList } from '../types';
import { withApollo } from '../helper/apollo';

export interface IPageOwnProps {}
export interface IPageOwnState {
  user: User;
}

class TrackingPage extends React.Component<IPageOwnProps, IPageOwnState> {
  state: IPageOwnState = {
    user: {
      _id: '1',
      name: 'Shawn',
      github: 'nhatquangta2911',
      email: 'shawn@enclave.vn',
      taskList: {} as TaskList,
    },
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <Head>
          <title>Personal Tracking</title>
        </Head>
        <PageWrapper>
          <HeaderSection></HeaderSection>
          <ContentSection>
            <LeftContentSection>
              <UpperLeftContentSection>
                <TrackingContainer github={user?.github} />
              </UpperLeftContentSection>
              <LowerLeftContentSection>
                <TaskListContainer />
              </LowerLeftContentSection>
            </LeftContentSection>
            <RightContentSection></RightContentSection>
          </ContentSection>
          <FooterSection></FooterSection>
        </PageWrapper>
      </>
    );
  }
}

export default withApollo(TrackingPage);
