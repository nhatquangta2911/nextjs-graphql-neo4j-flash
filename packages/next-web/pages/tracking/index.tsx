import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { withApollo } from "../../helper/apollo";
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
  NewestTaskSection,
} from "styled/pages.style";
import {
  Tracking as TrackingContainer,
  TaskList as TaskListContainer,
} from "../../containers";
import { Dialog } from "primereact/dialog";
import { User } from "../../types";
import { GET_USER_INFO } from "graphql/query/task.query";
import { getWeekNo } from "helper/dateTime";
import { IPageTrackingState } from "./tracking.reducer";
import { IActionPageTracking } from "./tracking.action";
import { StoreRootState } from "reducers/rootReducer";
import { Column, Row, CenteredRow } from "styled/global.style";
import { HeaderTask } from "components";

export interface IPageOwnProps {
  dialog: {
    dialogVisible: boolean;
    dialogContent: string;
  };
  hideDialog(): void;
  newestTask: string;
}
export interface IPageOwnState {
  user: User;
}

const TrackingPage: React.FC<IPageOwnProps> = ({
  dialog,
  hideDialog,
  newestTask,
}) => {
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
  // const weekNo = user?.taskList[0]?.weekNo;
  const weekNo = getWeekNo() || user?.taskList[0]?.weekNo;
  return (
    <>
      <Head>
        <title>Personal Tracking</title>
      </Head>
      <PageWrapper>
        <HeaderSection>
          <p>hi {user?.name}</p>
          <HeaderTask newestTask={newestTask} />
          <Link href="/">
            <a>back</a>
          </Link>
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
        <Dialog
          header="Congrats, keep going!"
          visible={dialog?.dialogVisible}
          style={{ width: "50vw" }}
          onHide={() => hideDialog()}
        >
          Task done:{" "}
          <span style={{ fontWeight: "bold" }}>{dialog?.dialogContent}</span>
        </Dialog>
      </PageWrapper>
    </>
  );
};

const mapStateToProps = (state: IPageTrackingState) => ({
  dialog: state?.dialog,
  newestTask: state?.newestTask,
});

const mapDispatchToProps = (dispatch: Dispatch<IActionPageTracking>) => ({
  hideDialog: () => {
    dispatch({
      type: "HIDE_DIALOG",
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApollo(TrackingPage));
