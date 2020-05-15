import styled from "styled-components";
import { Row, Column } from "./global.style";

export const PageWrapper = styled.div`
  width: 95%;
  height: auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  position: relative;
  padding: 0 2vw;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 1199px) {
    padding: 0 30px;
  }
`;

export const HeaderSection = styled(Row)`
  width: 100%;
  min-height: 8vh;
  position: absolute;
  top: 0;
  background-color: #f4f4f4;
  border-radius: 7px;
  padding: 2px 0;
  justify-content: space-between;
`;

export const FooterSection = styled(Row)`
  width: 100%;
  min-height: 8vh;
  background-color: #f4f4f4;
  height: 8vh;
  position: absolute;
  bottom: 0;
  padding: 2px 0;
  border-radius: 7px;
  justify-content: space-between;
`;

export const ContentSection = styled(Row)`
  width: 100%;
  min-height: 80vh;
  position: absolute;
  top: 8vh;
  justify-content: space-between;
  padding: 5px 0;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftContentSection = styled(Column)`
  width: 68vw;
  height: 100%;
  justify-content: flex-start;
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
