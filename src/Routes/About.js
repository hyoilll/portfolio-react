import React, { useState } from "react";
import styled from "styled-components";
import Skill from "../Component/Skill";
import History from "../Component/History";

const Container = styled("div")`
  margin: 150px 0 0 220px;
  width: 950px;
  height: 100%;
  text-align: center;
`;

const Description = styled("p")`
  font-size: 30px;
`;

const initSkills = () => {
  const skills = [];
  skills.push({
    title: "Front-end",
    skills: "HTML, CSS, JavaScript,React, Vue, TypeScript",
    icon: "fab fa-html5",
  });
  skills.push({
    title: "Back-end",
    skills: "JavaScript,NodeJs, Ruby",
    icon: "fas fa-server",
  });
  skills.push({
    title: "Mobile",
    skills: "Android, IOS, Swift,React Native, Kotlin",
    icon: "fas fa-mobile-alt",
  });

  return skills;
};

const About = () => {
  const [skills, setSkill] = useState(initSkills);

  return (
    <Container>
      <Description>
        現在Hanyang Cyber univercity3年生になりました。
        <br />
        学科はコンピューター工学科に編入し、2021年8月卒業見込みです。
        <br />
        今はフロントエンド分野のReact、TypeScriptを勉強しておりますが、
        <br />
        Back-end、Mobileまで勉強していきたいと思います。
      </Description>
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
    </Container>
  );
};

export default About;
