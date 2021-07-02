import React, { useState } from "react";
import styled from "styled-components";
import Skill from "../Component/Skill";
import History from "../Component/History";
import Hanyang from "../photo/hanyang.png";
import Kia from "../photo/kia.png";
import Kit from "../photo/kit.png";
import Layout from "../layout/Layout";

const Container = styled("div")`
  margin: 150px 0 100px 220px;
  width: 950px;
  height: 1500px;
`;

const Skills = styled("div")`
  margin-bottom: 150px;
`;

const Historys = styled("div")``;

const initSkills = () => {
  const skills = [];
  skills.push({
    title: "Front-end",
    skills: "HTML, CSS, JavaScript, React, Vue, TypeScript",
    icon: "fab fa-html5",
  });
  skills.push({
    title: "Back-end",
    skills: "JavaScript, NodeJs, Ruby",
    icon: "fas fa-server",
  });
  skills.push({
    title: "Mobile",
    skills: "Android, IOS, Swift, React Native, Kotlin",
    icon: "fas fa-mobile-alt",
  });

  return skills;
};

const initHistorys = () => {
  const historys = [];

  historys.push({
    img: Hanyang,
    title: "漢陽─大学校　コンピューター工学科、Hanyang Cyber univercity",
    period: "2020年3月 ~ 2022年2月の卒業見込み",
  });
  historys.push({
    img: Kia,
    title: "起亞自動車(株)、Kia Motors",
    period: "2017年2月 ~",
  });
  historys.push({
    img: Kit,
    title:
      "金烏工科大学校　コンピューターソフトウェア工学科、Kumoh National Institute of Technology",
    period: "2012年3月 ~ 2017年2月",
  });

  return historys;
};

const About = () => {
  const [skills, setSkill] = useState(initSkills);
  const [historys, setHistory] = useState(initHistorys);

  return (
    <Layout title={"About | Hyoil's Portfolio Site"}>
      <Container>
        <Skills>
          {skills.map((skill, idx) => {
            return (
              <Skill
                key={idx}
                title={skill.title}
                skills={skill.skills}
                icon={skill.icon}
              ></Skill>
            );
          })}
        </Skills>
        <Historys>
          {historys.map((history, idx) => {
            return (
              <History
                key={idx}
                img={history.img}
                title={history.title}
                period={history.period}
              ></History>
            );
          })}
        </Historys>
      </Container>
    </Layout>
  );
};

export default About;
