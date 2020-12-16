import React from "react";
import styled from "styled-components";
import HyoilImg from "../photo/kakao.jpg";
import Layout from "../layout/Layout";

const Container = styled("div")`
  margin: 200px 0 100px 250px;
  width: 950px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Photo = styled("img")`
  width: 300px;
  border-radius: 100px;
  box-shadow: 22px 27px 30px -5px rgba(0, 0, 0, 0.8);
  margin-right: 50px;
`;

const Description = styled("div")`
  font-size: 40px;
  text-align: center;
`;

const Links = styled("div")`
  margin: 20px 0;
  font-size: 50px;
  color: #e8acd3;
`;

const Link = styled("a")`
  :hover i {
    transform: scale(1.15);
    color: red;
  }
`;

const Icon = styled("i")`
  transition: all 0.3s ease-in-out;
`;

const Title = styled("h1")`
  font-size: 60px;
  margin-bottom: 50px;
`;

const Mail = styled("div")`
  margin-bottom: 20px;
`;

const Phone = styled("div")``;

const Name = styled("div")`
  font-size: 25px;
`;

const Contact = () => {
  return (
    <Layout title={"Contact | Hyoil's Portfolio Site"}>
      <Container>
        <Photo src={HyoilImg}></Photo>
        <Description>
          <Title className="title">Let's talk</Title>
          <Mail>
            <div className="Email">dlgydlf12345@naver.com</div>
            <div className="Gmail">dlgydlf123@gmail.com</div>
          </Mail>
          <Phone className="phoneNumber">+82-10-8218-7111</Phone>
          <Links>
            <Link
              className="github"
              href="https://github.com/hyoilll"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "30px" }}
            >
              <Icon className="fab fa-github"></Icon>
            </Link>
            <Link
              className="blog"
              href="https://blog.naver.com/dlgydlf12345"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="fab fa-blogger-b"></Icon>
            </Link>
          </Links>
          <Name className="version">- 2020 Lee Hyoil -</Name>
        </Description>
      </Container>
    </Layout>
  );
};

export default Contact;
