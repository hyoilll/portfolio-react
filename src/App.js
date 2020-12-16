import React from "react";
import Info from "./Component/Info";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyle";
import MyRouter from "./MyRouter";

const Main = styled("div")`
  width: 1200px;
  height: 1000px;
  /* display: flex;
  justify-content: center; */
  margin: 0 auto;
  font-family: "Do Hyeon", sans-serif;
`;

const Page = styled("div")``;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Page>
        <Info></Info>
        <MyRouter />
      </Page>
    </Main>
  );
};

export default App;
