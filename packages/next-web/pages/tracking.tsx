import React, { useState } from "react";
import Head from "next/head";
import { withApollo } from "../helper/apollo";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";
import {
  PageWrapper,
  HeaderSection,
  ContentSection,
  FooterSection,
  LeftContentSection,
  RightContentSection,
  UpperLeftContentSection,
  LowerLeftContentSection,
} from "styled/pages.style";
import {
  Tracking as TrackingContainer,
  TaskList as TaskListContainer,
} from "../containers";
import { User, TaskList } from "../types";
import { GET_USER_INFO } from "graphql/query/task.query";

export interface IPageOwnProps {}
export interface IPageOwnState {
  user: User;
}

const TrackingPage: React.FC = (props: IPageOwnProps) => {
  const today = moment();
  const currentDateTime = today.format("MMMM Do YYYY, h:mm:ss a");
  const [user, setUser] = useState({} as User);
  const { data, error } = useQuery(GET_USER_INFO, {
    variables: { name: "Shawn" },
  });
  setUser(data?.User[0]);
  return (
    <>
      <Head>
        <title>Personal Tracking</title>
      </Head>
      <PageWrapper>
        <HeaderSection>
          <p>hi Shawn!</p>
          <p>log out</p>
        </HeaderSection>
        <ContentSection>
          <LeftContentSection>
            <UpperLeftContentSection>
              <TrackingContainer github={user?.github} />
            </UpperLeftContentSection>
            <LowerLeftContentSection>
              <TrackingContainer github={user?.github} />
            </LowerLeftContentSection>
          </LeftContentSection>
          <RightContentSection>
            <TaskListContainer />
          </RightContentSection>
        </ContentSection>
        <FooterSection>
          <p>take every little step ^^</p>
          <p>{currentDateTime}</p>
        </FooterSection>
      </PageWrapper>
    </>
  );
};

export default withApollo(TrackingPage);
