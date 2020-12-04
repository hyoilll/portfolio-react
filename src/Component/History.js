import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const Photo = styled("img")`
  width: 140px;
  height: 140px;
  margin-right: 30px;
`;

const Description = styled("div")``;

const Title = styled("div")`
  margin-bottom: 20px;
  font-size: 25px;
`;

const Period = styled("div")`
  color: grey;
`;

const History = ({ img, title, period }) => {
  return (
    <Container>
      <Photo src={img}></Photo>
      <Description>
        <Title>{title}</Title>
        <Period>{period}</Period>
      </Description>
    </Container>
  );
};

export default History;
