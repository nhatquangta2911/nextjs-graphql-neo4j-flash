import styled from 'styled-components';
import { Column } from 'styled/global.style';

export const StudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5vh 5vw;
`;

export const ContentSection = styled(Column)`
  background-color: #f4f4f4;
  margin-bottom: 1vh;
`;

export const NavigateSection = styled(Column)`
  background-color: #f4f4f4;
`;
