import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Link from 'next/link';
import { StudyWrapper, NavigateSection, ContentSection } from './Study.style';
import { IPageTrackingState } from '../tracking/tracking.reducer';

type StudyHooksPageProps = {};

const StudyHooksPage: React.FC<StudyHooksPageProps> = () => {
  const total: number = useSelector((state) => state.total);
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

export default StudyHooksPage;
