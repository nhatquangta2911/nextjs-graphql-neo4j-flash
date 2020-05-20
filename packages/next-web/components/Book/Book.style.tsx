import styled from "styled-components";
import { Column, Row } from "styled/global.style";

export const BookWrapper = styled(Column)`
  align-items: flex-start;
  padding: 1vh 0 0;
  margin-bottom: 1vh;
  width: 98%;
  border-radius: 3px;
  height: 30vh;
  border: 1px solid #e8e8e8;
`;

export const BookCardHeader = styled(Row)`
  height: 10%;
  font-size: 0.85em;
  padding: 0 0.5vw;
  font-weight: 500;
  justify-content: center;
`;

export const BookCardContent = styled(Row)`
  height: 60%;
  margin: 1vh 0;
  justify-content: center;
`;

export const BookCardImage = styled(Row)`
  margin-bottom: 1vh;
`;

export const BookCardControl = styled(Column)`
  height: 15%;
  align-items: center;
  font-size: 0.8em;
`;
