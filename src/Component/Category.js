import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  padding: 30px;
  border-top: 4px solid gray;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const Items = styled("ul")``;

const Item = styled("li")`
  margin-bottom: 30px;
`;

const Category = () => {
  return (
    <Container>
      <ul className="menuItems">
        <Item className="item">Home</Item>
        <Item className="item">About</Item>
        <Item className="item">Skills</Item>
        <Item className="item">MyWork</Item>
        <Item className="item">Contact</Item>
      </ul>
    </Container>
  );
};

export default Category;
