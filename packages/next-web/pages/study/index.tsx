import React, { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { StudyWrapper, NavigateSection, ContentSection } from './Study.style';
import { IPageTrackingState } from '../tracking/tracking.reducer';

type StudyHooksPageProps = {
  total: number;
};

const StudyHooksPage: React.FC<StudyHooksPageProps> = ({ total }) => {
  // const total: number = useSelector((state) => state.total);
  return (
    <StudyWrapper>
      <ContentSection>
        <h3>Study Hooks</h3>
        <p>{total || 'not updated yet'}</p>
      </ContentSection>
      <NavigateSection>
        <Link href='/'>
          <a>back</a>
        </Link>
      </NavigateSection>
    </StudyWrapper>
  );
};

const mapStateToProps = (state: IPageTrackingState) => ({
  total: state.total,
});

export default connect(mapStateToProps)(StudyHooksPage);
