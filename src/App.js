import React from "react";
import Header from "./Component/Header";
import Info from "./Component/Info";
import Category from "./Component/Category";
import Container from "./Component/Container";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyle";

const Main = styled("div")`
  width: 1200px;
  height: 1500px;
  margin: 0 auto;
`;

const Left = styled("div")`
  position: fixed;
  top: 130px;
  width: 220px;
  font-size: 20px;
`;

const Right = styled("div")`
  margin: 110px 0 0 220px;
`;

const Page = styled("div")`
  display: grid;
  grid-template-columns: 220px 1fr;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Header></Header>
      <Page>
        <Left className="left">
          <Info></Info>
          <Category></Category>
        </Left>
        <Right className="right">
          <Container></Container>
        </Right>
      </Page>
    </Main>
  );
};

export default App;
