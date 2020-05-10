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
import { Tracking, TaskList } from '../containers';

export interface IPageOwnProps {}
//TODO: Add interfacess
export interface IPageOwnState {}

class TrackingPage extends React.Component<IPageOwnProps, IPageOwnState> {
  state = {
    user: {
      name: 'Shawn',
      github: 'nhatquangta2911',
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
              <Tracking github={user?.github} />
            </UpperLeftContentSection>
            <LowerLeftContentSection>
              <TaskList />
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
