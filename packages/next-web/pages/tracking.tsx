import React from "react";
import {
  PageWrapper,
  HeaderSection,
  ContentSection,
  FooterSection,
  LeftContentSection,
  RightContentSection,
} from "styled/pages.style";

export interface IPageOwnProps {}
export interface IPageOwnState {}

class TrackingPage extends React.Component<IPageOwnProps, IPageOwnState> {
  render() {
    return (
      <PageWrapper>
        <HeaderSection>
          <p>hi, shawn!</p>
          <p>today: 98% done</p>
        </HeaderSection>
        <ContentSection>
          <LeftContentSection>
            <p>multiple tab views here...</p>
          </LeftContentSection>
          <RightContentSection>
            <p>your goals</p>
          </RightContentSection>
        </ContentSection>
        <FooterSection>
          <p>good job! keep going!</p>
        </FooterSection>
      </PageWrapper>
    );
  }
}

export default TrackingPage;
