import React, { useState, useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { NewestTaskSection } from "styled/pages.style";
import { CenteredRow } from "styled/global.style";

interface HeaderTaskProps {
  newestTask: string;
}

const HeaderTask: React.FC<HeaderTaskProps> = ({ newestTask }) => {
  return (
    <Bounce delay={3000} duration={2000}>
      <NewestTaskSection>
        <CenteredRow>Newest Task</CenteredRow>
        <CenteredRow>
          <h3>{newestTask}</h3>
        </CenteredRow>
      </NewestTaskSection>
    </Bounce>
  );
};

export default HeaderTask;
