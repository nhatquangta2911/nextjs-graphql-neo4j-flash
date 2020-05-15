import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Bounce } from "react-awesome-reveal";
import { NewestTaskSection } from "styled/pages.style";
import { CenteredRow } from "styled/global.style";
import { IPageTrackingState } from "pages/tracking/tracking.reducer";

interface HeaderTaskProps {
  newestTask: string;
}

const HeaderTask: React.FC<HeaderTaskProps> = ({ newestTask }) => {
  return (
    <>
      <Bounce delay={8000} duration={2000} triggerOnce={false}>
        <NewestTaskSection>
          <CenteredRow>Newest Task</CenteredRow>
          <CenteredRow>
            <h3>{newestTask}</h3>
          </CenteredRow>
        </NewestTaskSection>
      </Bounce>
    </>
  );
};

const mapStateToProps = (state: IPageTrackingState) => ({
  newestTask: state?.newestTask,
});

export default connect(mapStateToProps)(HeaderTask);
