import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Container = styled("div")`
  display: grid;
  grid-template-columns: 200px 1fr;
  text-align: center;
  padding: 20px;
  font-size: 40px;
  margin-bottom: 10px;
  box-shadow: 0px 8px 16px -4px rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 1200px;
  background-color: white;
  top: 0;
  height: 100px;
  line-height: 60px;
`;

const Logo = styled("a")`
  width: 100%;
  height: 100%;
  font-family: "Nerko One", cursive;
  font-size: 50px;
`;

const Title = styled("h1")`
  font-size: 30px;
  font-weight: bold;
`;

const Header = () => {
  let path = window.location.pathname;
  path = path.substring(1, path.length);

  if (path === "") {
    path = "Home";
  }

  return (
    <Container>
      <Logo href="https://hyoilll.github.io/portfolio-react">Hyo il</Logo>
      <Title>{path}</Title>
    </Container>
  );
};

// withRouter는 render props : { match, location, history } 와 같은 props로써 경로가 변경 될 때마다 해당 구성 요소를 다시 렌더링합니다.</p>

// withRouter는 주로 history에 접근하여 컴포넌트에서 라우터를 조작하는 데 사용합니다.

export default withRouter(Header);
