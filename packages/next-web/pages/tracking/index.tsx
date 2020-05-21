import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { withApollo } from '../../helper/apollo';
import { useQuery } from '@apollo/react-hooks';
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
import {
  Tracking as TrackingContainer,
  TaskList as TaskListContainer,
  Bookshelf,
} from '../../containers';
import { Dialog } from 'primereact/dialog';
import { User } from '../../types';
import { GET_USER_INFO } from 'graphql/query/task.query';
import { getWeekNo } from 'helper/dateTime';
import { HeaderTask, SocialNetwork, Quote } from 'components';
import { IPageTrackingState } from './tracking.reducer';

export interface IPageOwnProps {}
export interface IPageOwnState {
  user: User;
}

const TrackingPage: React.FC<IPageOwnProps> = () => {
  const [username, setUsername] = useState('');
  const dialog = useSelector((state: IPageTrackingState) => state?.dialog);
  const dispatch = useDispatch();
  const hideDialog = useCallback(() => dispatch({ type: 'HIDE_DIALOG' }), [
    dispatch,
  ]);
  useEffect(() => {
    setUsername(localStorage.getItem('username') || 'Shawn');
  });
  const { data } = useQuery(GET_USER_INFO, {
    variables: { name: username },
  });
  const user = data?.User[0];
  const weekNo = getWeekNo() || user?.taskList[0]?.weekNo;
  const total = user?.taskList[0]?.total;
  const completed = user?.taskList[0]?.completed;
  return (
    <>
      <Head>
        <title>Personal Tracking</title>
      </Head>
      <PageWrapper>
        <HeaderSection>
          <p>hi {user?.name}</p>
          <HeaderTask />
          <Link href='/' shallow={true}>
            <a>back</a>
          </Link>
        </HeaderSection>
        <ContentSection>
          <LeftContentSection>
            <UpperLeftContentSection>
              <TrackingContainer github={user?.github} />
            </UpperLeftContentSection>
            <LowerLeftContentSection>
              <Bookshelf />
            </LowerLeftContentSection>
          </LeftContentSection>
          <RightContentSection>
            <TaskListContainer
              weekNo={weekNo}
              total={total}
              completed={completed}
            />
          </RightContentSection>
        </ContentSection>
        <FooterSection>
          <Quote />
          <SocialNetwork />
        </FooterSection>
        <Dialog
          header='Congrats, keep going!'
          visible={dialog?.dialogVisible}
          style={{ width: '50vw' }}
          onHide={() => hideDialog()}
        >
          Task done:{' '}
          <span style={{ fontWeight: 'bold' }}>{dialog?.dialogContent}</span>
        </Dialog>
      </PageWrapper>
    </>
  );
};

export default withApollo(TrackingPage);
