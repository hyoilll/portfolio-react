import React from "react";
import styled from "styled-components";

const Item = styled("li")`
  margin: 0 0 30px 50px;
`;

const Title = styled("h2")`
  font-size: 30px;
  margin-bottom: 7px;
`;

const Description = styled("div")`
  margin-left: 25px;
`;

const Link = styled("a")`
  :hover {
    text-decoration: underline;
    color: red;
  }
`;

const Project = ({ name, description, idx, github }) => {
  return (
    <Item>
      <Title className="title">
        {idx + 1}. {name}
      </Title>
      <Description>
        <div className="description" style={{ marginBottom: "5px" }}>
          {description}
        </div>
        <span>Github : </span>
        <Link className="github" href={github} target="_blank">
          {github}
        </Link>
      </Description>
    </Item>
  );
};

export default Project;
