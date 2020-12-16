import React from "react";
import Info from "./Component/Info";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyle";
import MyRouter from "./MyRouter";
import { useMediaQuery } from "react-responsive";

const Main = styled("div")`
  width: 1200px;
  height: 1000px;
  margin: 0 auto;
  font-family: "Do Hyeon", sans-serif;
`;

const Page = styled("div")``;

const App = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

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
