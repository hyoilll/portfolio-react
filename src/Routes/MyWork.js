import React, { useState } from "react";
import styled from "styled-components";
import Project from "../Component/Project";
import Layout from "../layout/Layout";

const Container = styled("div")`
  margin: 150px 0 100px 220px;
  width: 950px;
  height: 1200px;
`;

const Title = styled("h1")`
  font-size: 50px;
  text-align: center;
  margin-bottom: 100px;
`;

const SubTitle = styled("div")`
  font-size: 40px;
  margin: 0 20px 20px 0;
  display: inline-block;
`;

const Content = styled("div")`
  margin-left: 30px;
`;

const Items = styled("ul")`
  margin-bottom: 60px;
`;

const initReactP = () => {
  const reacts = [];

  reacts.push({
    name: "My Portfolio Site (ver2)",
    description: `自分を紹介するための個人サイトです。`,
    github: "https://github.com/hyoilll/portfolio-react",
  });
  reacts.push({
    name: "Moive App",
    description: `TMDBのApiを利用して最近の人気映画を見ることができるサイトです。`,
    github: "https://github.com/hyoilll/react.js",
  });
  reacts.push({
    name: "Web Game",
    description: `vanilla jsで作ったWeb Gameを再びReactで作ってみました。`,
    github: "https://github.com/hyoilll/web-game-react",
  });

  return reacts;
};

const initJsP = () => {
  const jss = [];

  jss.push({
    name: "My Portfolio Site (ver1)",
    description: `自分を紹介するための個人サイトです。`,
    github: "https://github.com/hyoilll/Portfolio-web-site",
  });
  jss.push({
    name: "Todo List",
    description:
      "毎日のすべきことを記録しておいて、計画的に過ごすことができるサイトです。",
    github: "https://github.com/hyoilll/javascript2",
  });
  jss.push({
    name: "Web Game",
    description:
      "Webで楽しめるゲーム（MinesweeperやTicTecTocやCard Matchingなど）を作ってみました。",
    github: "https://github.com/hyoilll/web-game-javascript",
  });

  return jss;
};

const initHtmlCssP = () => {
  const hss = [];

  hss.push({
    name: "Kakao Talk Clone coding",
    description:
      "韓国で多くの人々が使っているメッセンジャーであるカカオトークをCloneCodingしてみました。",
    github: "https://github.com/hyoilll/kakao-clone3",
  });
  hss.push({
    name: "Naver clone coding",
    description:
      "韓国で多くの人々が使っている検索エンジンであるNaverのホームページをCloneCodingしてみました。",
    github: "https://github.com/hyoilll/naver1",
  });

  return hss;
};

const MyWork = () => {
  const [reactProjects, setReact] = useState(initReactP);
  const [jsProjects, setJs] = useState(initJsP);
  const [htmlCssProjects, setHC] = useState(initHtmlCssP);

  return (
    <Layout title={"My Work | Hyoil's Portfolio Site"}>
      <Container>
        <Title>Projects</Title>
        <Content>
          <Items className="react">
            <SubTitle>✔ React Projects</SubTitle>
            <span>with Html, Css, JavaScript (library.React)</span>
            {reactProjects.map((react, idx) => {
              return (
                <Project
                  key={idx}
                  name={react.name}
                  description={react.description}
                  idx={idx}
                  github={react.github}
                ></Project>
              );
            })}
          </Items>
          <Items className="js">
            <SubTitle>✔ Vanilla Js Projects</SubTitle>
            <span>with Html, Css, Vanilla JavaScript</span>
            {jsProjects.map((js, idx) => {
              return (
                <Project
                  key={idx}
                  name={js.name}
                  description={js.description}
                  idx={idx}
                  github={js.github}
                ></Project>
              );
            })}
          </Items>
          <Items className="html-css">
            <SubTitle>✔ Html & Css Projects</SubTitle>
            <span>with Html, Css</span>
            {htmlCssProjects.map((hc, idx) => {
              return (
                <Project
                  key={idx}
                  name={hc.name}
                  description={hc.description}
                  idx={idx}
                  github={hc.github}
                ></Project>
              );
            })}
          </Items>
        </Content>
      </Container>
    </Layout>
  );
};

export default MyWork;
