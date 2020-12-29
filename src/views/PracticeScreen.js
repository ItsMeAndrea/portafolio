import React from "react";

import Project from "../components/Project/Project";

const PracticeScreen = ({ data }) => {
  const projects = data.projects;

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </div>
  );
};

export default PracticeScreen;
