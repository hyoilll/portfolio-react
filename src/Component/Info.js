import React from "react";
import styled from "styled-components";

import Profile from "../photo/profile.png";

const Container = styled("div")`
  padding: 20px;
`;

const Photo = styled("img")`
  width: 100%;
  height: 100px;
`;

const Blog = styled("div")`
  :hover {
    color: red;
  }
`;

const Git = styled("div")`
  :hover {
    color: red;
  }
`;

const Detail = styled("div")`
  display: flex;
  margin: 30px 0 20px 0;
  justify-content: space-around;
  font-size: 25px;
  font-weight: bold;
`;

const Info = () => {
  return (
    <Container>
      <Photo className="profile-picture" src={Profile}></Photo>
      <Detail>
        <Blog className="blog">
          <a href="https://blog.naver.com/dlgydlf12345" target="_blank">
            Blog
          </a>
        </Blog>
        <Git className="github">
          <a href="https://github.com/hyoilll" target="_blank">
            Github
          </a>
        </Git>
      </Detail>
    </Container>
  );
};

export default Info;
