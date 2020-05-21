import styled from "styled-components";
import { Column, Row } from "styled/global.style";

export const AddBookDialogWrapper = styled(Column)`
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  & .k-animation-container {
    z-index: 10003;
  }
`;

export const AddBookDialogItem = styled(Row)`
  justify-content: space-between;
  margin: 1vh 0;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const AddBookDialogItemLabel = styled(Row)`
  justify-content: space-between;
`;

export const AddBookDialogItemText = styled.p`
  font-size: 0.85em;
  margin-right: 1vw;
`;
