import React from "react";
import { Row, Col } from "reactstrap";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projectData } from "../services/projectData";

const ProjectScreen = () => {
  return (
    <div>
      <Row className="justify-content-center">
        {projectData.map((project, index) => {
          return (
            <Col
              key={index}
              xs={12}
              sm={4}
              style={{ height: "280px" }}
              className="mx-5 mb-5"
            >
              <ProjectCard
                cover={project.imgCover}
                title={project.title}
                to={project.route}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProjectScreen;
