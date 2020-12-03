import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Skills from "./Routes/SKills";
import MyWork from "./Routes/MyWork";
import Contact from "./Routes/Contact";
import Category from "./Component/Category";
import Header from "./Component/Header";

import styled from "styled-components";

const Container = styled("div")``;

const MyRouter = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Category />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Skills" exact component={Skills} />
          <Route path="/MyWork" exact component={MyWork} />
          <Route path="/Contact" exact component={Contact} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </Container>
  );
};

export default MyRouter;
