import styled from 'styled-components';

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh;
  margin: 10px 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
