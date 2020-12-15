import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { Container } from "reactstrap";

//Components
import Header from "./components/Header/Header";

//Screens
import AboutScreen from "./views/AboutScreen";
import ProjectScreen from "./views/ProjectScreen";
import SingleProjectScreen from "./views/SingleProjectScreen";
import PracticeScreen from "./views/PracticeScreen";

//Data
import { projectData } from "./services/projectData";

ReactDOM.render(
  <Router>
    <Container className="themed-container">
      <Header />
      <Switch>
        <Route exact path="/" name="About" component={AboutScreen} />
        <Route path="/project" name="Project" component={ProjectScreen} />
        <Route exct path="/promarca" name="Promarca">
          <SingleProjectScreen data={projectData[0]} />
        </Route>
        <Route exct path="/fuerzav" name="FuerzaV">
          <SingleProjectScreen data={projectData[1]} />
        </Route>
        <Route exct path="/aptisgo" name="AptisGo">
          <SingleProjectScreen data={projectData[2]} />
        </Route>
        <Route exct path="/practice" name="Practice">
          <PracticeScreen data={projectData[3]} />
        </Route>
      </Switch>
    </Container>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
