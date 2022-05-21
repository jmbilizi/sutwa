import React from "react";
import MaterialUITooltip from "@material-ui/core/Tooltip";

function Tooltip({ children, title }) {
  return <MaterialUITooltip title={title}>{children}</MaterialUITooltip>;
}

Tooltip.propTypes = {
  ...MaterialUITooltip.propTypes,
};
export default Tooltip;
