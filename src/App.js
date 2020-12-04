import React from "react";
import Info from "./Component/Info";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyle";
import MyRouter from "./MyRouter";

const Main = styled("div")`
  width: 1200px;
  height: 1000px;
  margin: 0 auto;
  font-family: "Do Hyeon", sans-serif;
`;

const Content = styled("div")`
  font-size: 20px;
`;

const Page = styled("div")`
  display: grid;
  grid-template-columns: 220px 1fr;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Page>
        <Content className="left">
          <Info></Info>
          <MyRouter />
        </Content>
      </Page>
    </Main>
  );
};

export default App;
