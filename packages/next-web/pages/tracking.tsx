import React from 'react';
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

export interface IPageOwnProps {}
//TODO: Add interfacess
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
    );
  }
}

export default TrackingPage;
