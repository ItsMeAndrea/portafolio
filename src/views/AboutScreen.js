import React from "react";
import { Row, Col } from "reactstrap";
import illustration from "../assets/img/illustration.png";
import SocialButton from "../components/SocialButton/SocialButton";

const AboutScreen = () => {
  return (
    <div>
      <h3 style={{ fontWeight: "normal" }}>Hi! My name is</h3>
      <h1>Maria Andrea Urdaneta</h1>
      <Row>
        <Col xs={12} sm={6} className="m-auto ">
          <p>
            I'm a Computer Engineer. I started to work designing user interfaces
            for web applications and then I got into Front-end development. I've
            been involved with the process of creating an app from the start to
            the end. I try to keep up with the best practices so can continue
            learning and growing as a web developer.
          </p>
          <div className="d-flex justify-content-around">
            <SocialButton id={"GitHub"} />
            <SocialButton id={"LinkedIn"} />
            <SocialButton id={"Download"} />
          </div>
        </Col>
        <Col xs={12} sm={6} className="mt-3 align-self-center">
          <img src={illustration} alt="illustration" width="100%" />
        </Col>
      </Row>
    </div>
  );
};

export default AboutScreen;
