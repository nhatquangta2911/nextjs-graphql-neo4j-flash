import styled from "styled-components";
import { Row, Column } from "./global.style";

export const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  position: relative;
  padding: 0 2vw;
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
  background-color: #f4f4f4;
  border-radius: 7px;
  padding: 2px 0;
  justify-content: space-between;
`;

export const FooterSection = styled(Row)`
  width: 100%;
  background-color: #f4f4f4;
  height: 8vh;
  border-radius: 7px;
  justify-content: space-between;
`;

export const ContentSection = styled(Row)`
  width: 100%;
  height: 80vh;
  justify-content: space-between;
  padding: 5px 0;
`;

export const LeftContentSection = styled(Column)`
  width: 68vw;
  height: 100%;
  justify-content: space-between;
  background-color: #f4f4f4;
  border-radius: 7px;
  margin-right: 1vw;
`;

export const RightContentSection = styled(Column)`
  width: 28vw;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 7px;
  justify-content: space-between;
  padding: 0 2px;
`;

export const UpperLeftContentSection = styled(Row)`
  width: 100%;
  height: 50%;
  padding: 0 2px;
  align-items: stretch;
  justify-content: stretch;
  min-height: 50%;
  border-radius: 7px;
  width: 100%;
`;
export const LowerLeftContentSection = styled(Row)`
  width: 100%;
  height: 50%;
  padding: 0 2px;
  align-items: stretch;
  justify-content: stretch;
  min-height: 50%;
  border-radius: 7px;
  width: 100%;
`;

export const HomeRouteSection = styled(Column)`
  width: 100%;
  height: auto;
  padding: 1vh 0;
`;

export const ContentRouteSection = styled(Column)`
  width: 100%;
  height: auto;
  padding: 1vh 0;
`;

export const NavigateRouteSection = styled(Column)`
  width: 100%;
  height: auto;
  padding: 1vh 0;
`;

export const NewestTaskSection = styled(Column)`
  justify-content: center;
`;
