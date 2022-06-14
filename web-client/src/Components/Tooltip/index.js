import React from "react";
import MaterialUITooltip from "@mui/material/Tooltip";

function Tooltip({ children, title }) {
  return (
    <MaterialUITooltip
      title={
        <small className="lead px-1" style={{ fontSize: "15px" }}>
          {title}
        </small>
      }
    >
      {children}
    </MaterialUITooltip>
  );
}

Tooltip.propTypes = {
  ...MaterialUITooltip.propTypes,
};
export default Tooltip;
