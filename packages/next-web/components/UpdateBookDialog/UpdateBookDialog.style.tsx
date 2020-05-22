import styled from "styled-components";
import { Column, Row } from "styled/global.style";

export const UpdateBookDialogWrapper = styled(Row)`
  justify-content: space-between;
`;

export const UpdateBookDialogLeftCoverImage = styled(Row)`
  flex-basis: 30%;
  justify-content: center;
`;

export const UpdateBookDialogEditor = styled(Column)`
  flex-basis: 70%;
  padding: 0 1vw;
  justify-content: space-around;
`;
