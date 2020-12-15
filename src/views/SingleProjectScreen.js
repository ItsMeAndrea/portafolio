import React from "react";
import { Button, Row, Col, Badge } from "reactstrap";
import CarouselCustom from "../components/Carousel/CarouselCustom";

const SingleProjectScreen = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <a href={data.website} target="_blank" rel="noreferrer">
        {data.website}
      </a>
      <Row>
        <Col xs={12} sm={6} className="m-auto">
          <p>{data.description}</p>
          <p className="font-weight-bold">Skills:</p>
          <Row>
            {data.skills.map((skill, index) => (
              <Col xs={4} md={3} key={index} className="text-center mb-2">
                <Badge pill>{skill}</Badge>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          <CarouselCustom items={data.images} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleProjectScreen;
