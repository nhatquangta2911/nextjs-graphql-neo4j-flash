import React, { useState, useEffect } from "react";
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
import { getWeekNo } from "helper/dateTime";

export interface IPageOwnProps {}
export interface IPageOwnState {
  user: User;
}

const TrackingPage: React.FC = (props: IPageOwnProps) => {
  const [username, setUsername] = useState("");
  const today = moment();
  const currentDateTime = today.format("MMMM Do YYYY, h:mm:ss a");
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  });
  const { data, error } = useQuery(GET_USER_INFO, {
    variables: { name: "Shawn" },
  });
  const user = data?.User[0];
  const weekNo = getWeekNo() || user?.taskList[0]?.weekNo;
  return (
    <>
      <Head>
        <title>Personal Tracking</title>
      </Head>
      <PageWrapper>
        <HeaderSection>
          <p>hi {user?.name}</p>
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
            <TaskListContainer weekNo={weekNo} />
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
