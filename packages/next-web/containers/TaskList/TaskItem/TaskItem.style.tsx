import styled from 'styled-components';
import { Row } from '../../../styled/global.style';

export const TaskItemWrapper = styled(Row)`
  width: 100%;
  height: auto;
  min-height: 4vh;
  justify-content: space-between;
  margin-bottom: 1vh;
  border-radius: 4px;
  opacity: ${(props) => (props.done ? 0.3 : 1)};
`;

export const TaskItemPrimary = styled(Row)`
  border-radius: 3px 0 0 3px;
  flex-basis: 2%;
  background-color: ${(props) => (props.primary ? '#007ad9' : '#ccc')};
`;

export const TaskItemContent = styled(Row)`
  flex-basis: 70%;
  padding: 0.5vh 1vw;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

export const TaskItemControl = styled(Row)`
  flex-basis: 28%;
  align-items: stretch;
  justify-content: flex-end;
`;
