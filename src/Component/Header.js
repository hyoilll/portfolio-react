import React from "react";
import styled from "styled-components";
import LogoPhoto from "../photo/Logo.png";

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

const Header = () => {
  return (
    <Container>
      <Logo href="#">Hyo il</Logo>
      <div>Title</div>
    </Container>
  );
};

export default Header;
