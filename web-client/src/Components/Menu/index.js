import * as React from "react";
import { Menu as MaterialUIMenu } from "@mui/material";
import PropTypes from "prop-types";

export const Menu = ({ children, ...rest }) => {
  return (
    <MaterialUIMenu
      {...rest}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      {children}
    </MaterialUIMenu>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
};
