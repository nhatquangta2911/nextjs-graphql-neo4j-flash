import styled from "styled-components";
import { Column, Row } from "styled/global.style";

export const BookshelfWrapper = styled(Column)`
  max-height: 50vh;
  margin: 1vh 3.5px;
  height: 43vh;
  width: 100%;
  padding: 0 1vw;
  border: 1px solid #c8c8c8;
  border-radius: 3px;
`;

export const BookshelfHeader = styled(Row)`
  height: 15%;
  justify-content: space-between;
`;

export const BookshelfContent = styled(Row)`
  height: 85%;
  justify-content: center;
  padding: 0.5vh 0 -0.5vh;
`;

export const BookshelfTitle = styled(Column)`
  font-weight: bold;
  justify-content: center;
`;

export const BookshelfDescription = styled(Row)`
  font-weight: 400;
  font-size: 0.7em;
`;

export const AddBookSection = styled(Row)``;
