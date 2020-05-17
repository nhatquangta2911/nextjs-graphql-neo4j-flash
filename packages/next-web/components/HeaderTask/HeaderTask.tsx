import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Bounce } from 'react-awesome-reveal';
import { NewestTaskSection } from 'styled/pages.style';
import { CenteredRow } from 'styled/global.style';
import { IPageTrackingState } from 'pages/tracking/tracking.reducer';
import { CenteredRowTitle } from '../../styled/global.style';
import { IActionPageTracking } from '../../pages/tracking/tracking.action';

interface HeaderTaskProps {}

const HeaderTask: React.FC<HeaderTaskProps> = () => {
  const newestTask: string = useSelector(
    (state: IPageTrackingState) => state?.newestTask
  );
  return (
    <>
      <Bounce delay={8000} duration={2000} triggerOnce={false}>
        <NewestTaskSection>
          <CenteredRow>Newest Task</CenteredRow>
          <CenteredRowTitle>{newestTask}</CenteredRowTitle>
        </NewestTaskSection>
      </Bounce>
    </>
  );
};

export default HeaderTask;
