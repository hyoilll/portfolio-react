import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  margin: 60px 0;
  font-size: 30px;
`;

const Circle = styled("div")`
  border: 4px solid #e8acd3;
  border-radius: 50%;
  font-size: 70px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  :hover i {
    transform: rotate(15deg) scale(1.1);
    color: red;
  }
`;

const Icon = styled("i")`
  color: #e8acd3;
  transition: all 300ms ease;
`;

const Title = styled("h3")`
  margin: 20px 0 10px 0;
  font-size: 40px;
`;

const Description = styled("div")``;

const Skill = ({ title, skills, icon }) => {
  return (
    <Container>
      <Circle>
        <Icon className={icon}></Icon>
      </Circle>
      <Title>{title}</Title>
      <Description>{skills}</Description>
    </Container>
  );
};

export default Skill;
