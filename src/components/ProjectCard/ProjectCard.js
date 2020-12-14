import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./style.css";
import history from "../../services/history";

const ProjectCard = ({ cover, title, to }) => {
  return (
    <Card>
      <CardImg
        top
        src={cover}
        alt="Card image cap"
        onClick={() => history.push(to)}
        className="rounded"
      />
      <CardBody>
        <CardTitle
          tag="h5"
          className="text-center"
          onClick={() => history.push(to)}
        >
          {title}
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
