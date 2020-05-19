import styled from "styled-components";
import { Column, Row } from "styled/global.style";

export const BookshelfWrapper = styled(Column)`
  max-height: 50vh;
  margin-top: 1vh;
  height: auto;
  width: 100%;
  background-color: #ffa;
`;

export const BookshelfHeader = styled(Column)`
  flex-basis: 1;
  background-color: #aff;
`;

export const BookshelfContent = styled(Row)`
  flex-basis: 4;
  background-color: #afa;
`;
