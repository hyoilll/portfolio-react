import React from "react";
import styled from "styled-components";
import ProfileImg from "../photo/hyoil.jpg";

const Container = styled("div")`
  margin: 150px 0 0 220px;
  width: 950px;
  height: 100%;
  text-align: center;
  font-weight: bold;
`;

const Photo = styled("img")`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0px 7px 31px -5px rgba(0, 0, 0, 0.8);
`;

const Title = styled("h2")`
  font-size: 50px;
  margin: 50px 0;
`;

const Description = styled("p")`
  font-size: 30px;
`;

const Home = () => {
  return (
    <Container>
      <Photo src={ProfileImg}></Photo>
      <Title>
        初めまして、
        <br />
        【イ・ヒョイル】と申します。
      </Title>
      <Description>
        アプリケーション開発を目指しております。宜しくお願い致します。
      </Description>
    </Container>
  );
};

export default Home;
