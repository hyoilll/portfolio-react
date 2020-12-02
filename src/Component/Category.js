import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled("div")`
  padding: 30px;
  border-top: 4px solid gray;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const Item = styled("li")`
  margin-bottom: 30px;
  :hover {
    color: red;
  }
  color: ${(props) => (props.current ? "red" : "black")};
`;

const Category = () => {
  return (
    <Container>
      <ul className="menuItems">
        <Item className="item" current={window.location.pathname === "/"}>
          <Link to="/">Home</Link>
        </Item>
        <Item className="item" current={window.location.pathname === "/About"}>
          <Link to="/About">About</Link>
        </Item>
        <Item className="item" current={window.location.pathname === "/Skills"}>
          <Link to="/Skills">Skills</Link>
        </Item>
        <Item className="item" current={window.location.pathname === "/MyWork"}>
          <Link to="/MyWork">MyWork</Link>
        </Item>
        <Item
          className="item"
          current={window.location.pathname === "/Contact"}
        >
          <Link to="/Contact">Contact</Link>
        </Item>
      </ul>
    </Container>
  );
};

export default withRouter(Category);
