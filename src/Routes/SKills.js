import React, { useState } from "react";
import styled from "styled-components";
import SkillBar from "../Component/SkillBar";
import Ide from "../Component/Ide";
import Etc from "../Component/Etc";
import Layout from "../layout/Layout";

const Container = styled("div")`
  margin: 150px 0 0 220px;
  width: 950px;
  height: 100%;
  text-align: center;
`;

const MainTitle = styled("h3")`
  font-size: 45px;
  margin-bottom: 100px;
`;

const Content = styled("div")`
  display: flex;
  padding: 10px;
`;

const Skills = styled("div")`
  background-color: #4d4d4d;
  width: 70%;
  padding: 20px;
  color: white;
  border-top-left-radius: 70px;
`;

const IdeEtc = styled("div")`
  width: 30%;

  color: white;
`;

const SubTitle = styled("h5")`
  margin-bottom: 20px;
  font-size: 30px;
`;

const Ides = styled("div")`
  height: 50%;
  padding: 20px;
  background-color: #616161;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Etcs = styled("div")`
  height: 50%;
  padding: 20px;
  background-color: #7c7979;
  border-bottom-right-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const initSkill = () => {
  const skills = [];

  skills.push({
    name: "HTML",
    per: "95%",
    bar: 95,
  });
  skills.push({
    name: "CSS",
    per: "90%",
    bar: 90,
  });
  skills.push({
    name: "JavaScript",
    per: "90%",
    bar: 90,
  });
  skills.push({
    name: "React",
    per: "75%",
    bar: 75,
  });
  skills.push({
    name: "TypeScript",
    per: "40%",
    bar: 40,
  });

  return skills;
};

const initIde = () => {
  const ides = [];

  ides.push({
    name: "Visual Studio",
  });
  ides.push({
    name: "Visual Studio Code",
  });
  ides.push({
    name: "Eclipse",
  });

  return ides;
};

const initEtc = () => {
  const ets = [];

  ets.push({
    name: "Git",
  });
  ets.push({
    name: "Slack",
  });

  return ets;
};

const SKills = () => {
  const [skills, setSkill] = useState(initSkill);
  const [ides, setIde] = useState(initIde);
  const [etc, setEtc] = useState(initEtc);

  return (
    <Layout title={"Skills | Hyoil's Portfolio Site"}>
      <Container>
        <MainTitle className="title">Skills & Attributes</MainTitle>
        <Content className="content">
          <Skills className="skills">
            <SubTitle className="skills__title">Skills</SubTitle>
            <ul>
              {skills.map((skill, idx) => {
                return (
                  <SkillBar
                    key={idx}
                    name={skill.name}
                    per={skill.per}
                    bar={skill.bar}
                  ></SkillBar>
                );
              })}
            </ul>
          </Skills>
          <IdeEtc className="IDE-Etc">
            <Ides className="IDE">
              <div>
                <SubTitle className="IDE__title">IDE</SubTitle>
                <ul>
                  {ides.map((ide, idx) => {
                    return <Ide key={idx} name={ide.name}></Ide>;
                  })}
                </ul>
              </div>
            </Ides>
            <Etcs className="Etc">
              <div>
                <SubTitle className="Etc__title">Etc..</SubTitle>
                <ul>
                  {etc.map((etc, idx) => {
                    return <Etc key={idx} name={etc.name}></Etc>;
                  })}
                </ul>
              </div>
            </Etcs>
          </IdeEtc>
        </Content>
      </Container>
    </Layout>
  );
};

export default SKills;
