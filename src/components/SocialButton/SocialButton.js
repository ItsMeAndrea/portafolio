import React, { useState } from "react";
import { Button, Tooltip } from "reactstrap";
import Icon from "../Icon/Icon";

const SocialButton = ({ id }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <div>
      <Button
        id={id}
        className="rounded-circle"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#FF8364",
          borderColor: "#FF8364",
        }}
      >
        <Icon name={id} size={20} />
      </Button>
      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen}
        target={id}
        toggle={toggle}
      >
        {id}
      </Tooltip>
    </div>
  );
};

export default SocialButton;
