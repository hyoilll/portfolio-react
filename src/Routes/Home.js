import React from "react";
import styled from "styled-components";
import ProfileImg from "../photo/hyoil.jpg";
import Layout from "../layout/Layout";

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
  margin-bottom: 50px;
`;

const Home = () => {
  return (
    <Layout title={"Home | Hyoil's Portfolio Site"}>
      <Container>
        <Photo src={ProfileImg}></Photo>
        <Title>
          初めまして、
          <br />
          【イ・ヒョイル】と申します。
        </Title>
        <Description>
          現在Hanyang Cyber univercity3年生になりました。
          <br />
          学科はコンピューター工学科に編入し、2021年8月卒業見込みです。
          <br />
          今はフロントエンド分野のReact、TypeScriptを勉強しておりますが、
          <br />
          Back-end、Mobileまで勉強していきたいと思います。
        </Description>
        <Description>
          アプリケーション開発を目指しております。宜しくお願い致します。
        </Description>
      </Container>
    </Layout>
  );
};

export default Home;
