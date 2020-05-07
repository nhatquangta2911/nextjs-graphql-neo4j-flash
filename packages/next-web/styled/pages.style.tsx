import styled from "styled-components";
import { Row, Column } from "./global.style";

export const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  position: relative;
  padding: 0 45px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 30px;
  }

  @media (max-width: 1199px) {
    padding: 0 30px;
  }
`;

export const HeaderSection = styled(Row)`
  width: 100%;
  height: 8vh;
  padding: 2px 0;
  justify-content: space-between;
`;

export const FooterSection = styled(Row)`
  width: 100%;
  height: 8vh;
  justify-content: space-between;
`;

export const ContentSection = styled(Row)`
  width: 100%;
  height: 84vh;
  justify-content: space-between;
  padding: 5px 0;
`;

export const LeftContentSection = styled(Column)`
  width: 70vw;
  height: 100%;
  justify-content: space-between;
`;

export const RightContentSection = styled(Column)`
  width: 30%;
  height: 100%;
  justify-content: space-between;
  padding: 0 2px;
`;
