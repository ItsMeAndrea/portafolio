import React from "react";
import Download from "../../assets/icons/download.png";
import Github from "../../assets/icons/github.png";
import LinkedIn from "../../assets/icons/linkedin.png";

const icons = {
  Download: Download,
  GitHub: Github,
  LinkedIn: LinkedIn,
};

const Icon = ({ name, size }) => {
  return <img src={icons[name]} alt={name} width={size} height={size} />;
};

export default Icon;
