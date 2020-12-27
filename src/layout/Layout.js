import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const Container = styled("div")``;

const Layout = ({ children, title }) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Container>
  );
};

export default Layout;
