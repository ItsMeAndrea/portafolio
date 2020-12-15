import React from "react";
import { Row, Col } from "reactstrap";
import pdf from "../assets/pdf/CV_Maria_Andrea.pdf";
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
            for web applications at the same time I was learning about Front-end
            development. I've seen and worked in developing an app from start to
            end. I try to keep up with the best practices so that I can continue
            learning and growing as a web developer.
          </p>
          <div className="d-flex justify-content-around">
            <SocialButton id={"GitHub"} link="https://github.com/ItsMeAndrea" />
            <SocialButton
              id={"LinkedIn"}
              link="https://www.linkedin.com/in/andreaurdaneta13/"
            />
            <SocialButton id={"Download"} link={pdf} />
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
