import styled, { createGlobalStyle } from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  font-size: 0.8em;
`;

export const CenteredRowTitle = styled(CenteredRow)`
  font-size: 1em;
  font-weight: bold;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    /* font-weight: 500; */
  }
  body{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1,h2,h3,h4,h5,h6  {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  .k-animation-container {
    z-index: 10003 
}

`;
