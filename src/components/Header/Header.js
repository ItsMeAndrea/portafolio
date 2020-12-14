import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import history from "../../services/history";
import "./style.css";
import { Button } from "reactstrap";

const Header = () => {
  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [projectIsActive, setProjectIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setAboutIsActive(true);
      setProjectIsActive(false);
    } else {
      setProjectIsActive(true);
      setAboutIsActive(false);
    }
  }, [location.pathname]);

  return (
    <div className="header d-flex justify-content-around mb-5">
      <Button
        className="btn-header"
        onClick={() => {
          history.push("/");
        }}
        active={aboutIsActive}
      >
        About
      </Button>
      <Button
        className="btn-header"
        onClick={() => {
          history.push("/project");
        }}
        active={projectIsActive}
      >
        Project
      </Button>
    </div>
  );
};

export default Header;
