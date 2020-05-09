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
import GithubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

export interface IPageOwnProps {}
//TODO: Add interfaces
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
        <HeaderSection>
          <p>hi, shawn!</p>
          <p>today: 98% done</p>
        </HeaderSection>
        <ContentSection>
          <LeftContentSection>
            <UpperLeftContentSection>
              <TabView renderActiveOnly={true}>
                <TabPanel
                  header='Github Contributions'
                  leftIcon='pi pi-chart-bar'
                >
                  <ScrollPanel style={{ width: '100%', height: '30vh' }}>
                    <GithubCalendar
                      username={user.github}
                      color='hsl(203, 82%, 33%)'
                      fontSize={12}
                    >
                      <ReactTooltip delayShow={50} html />
                    </GithubCalendar>
                  </ScrollPanel>
                </TabPanel>
                <TabPanel header='Calendar' leftIcon='pi pi-calendar'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam iure labore quasi maxime enim fugiat eligendi quidem
                  illo laborum. Sed quibusdam ullam ex. Aspernatur nulla autem
                  maiores, impedit pariatur labore!
                </TabPanel>
                <TabPanel header='Weekly Tasks' leftIcon='pi pi-list'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam iure labore quasi maxime enim fugiat eligendi quidem
                  illo laborum. Sed quibusdam ullam ex. Aspernatur nulla autem
                  maiores, impedit pariatur labore!
                </TabPanel>
              </TabView>
            </UpperLeftContentSection>
            <LowerLeftContentSection>
              <TabView renderActiveOnly={true}>
                <TabPanel header='Book Tracking' leftIcon='pi pi-tags'>
                  <ScrollPanel style={{ width: '100%', height: '30vh' }}>
                    <GithubCalendar
                      username={user.github}
                      years={[2020, 2019]}
                      fullYear={false}
                      color='hsl(203, 82%, 33%)'
                      fontSize={12}
                    >
                      <ReactTooltip delayShow={50} html />
                    </GithubCalendar>
                  </ScrollPanel>
                </TabPanel>
                <TabPanel header='Financial Management' leftIcon='pi pi-tags'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam iure labore quasi maxime enim fugiat eligendi quidem
                  illo laborum. Sed quibusdam ullam ex. Aspernatur nulla autem
                  maiores, impedit pariatur labore!
                </TabPanel>
              </TabView>
            </LowerLeftContentSection>
          </LeftContentSection>
          <RightContentSection></RightContentSection>
        </ContentSection>
        <FooterSection>
          <p>good job! keep going!</p>
        </FooterSection>
      </PageWrapper>
    );
  }
}

export default TrackingPage;
