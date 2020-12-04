import React from "react";
import styled from "styled-components";

const Item = styled("li")`
  margin-bottom: 20px;
`;

const Content = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const BarBg = styled("div")`
  background-color: #7c7979;
  width: 100%;
  height: 5px;
  margin-top: 10px;
`;

const Bar = styled("div")`
  background-color: orange;
  width: ${(props) => `${props.bar}%`};
  height: 100%;
`;

const SkillBar = ({ name, per, bar }) => {
  return (
    <>
      <Item className="skill">
        <Content>
          <div>{name}</div>
          <div>{per}</div>
        </Content>
        <BarBg className="bar">
          <Bar bar={bar}></Bar>
        </BarBg>
      </Item>
    </>
  );
};

export default SkillBar;
