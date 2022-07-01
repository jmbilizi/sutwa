import * as React from "react";
import { Menu as MaterialUIMenu } from "@mui/material";
import PropTypes from "prop-types";

const Menu = ({ children, width, ...rest }) => {
  return (
    <MaterialUIMenu
      {...rest}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      PaperProps={{
        style: {
          marginTop: 60,
          maxHeight: "80vh",
          cursor: "pointer",
          width: width,
        },
      }}
    >
      {children}
    </MaterialUIMenu>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
};

export default Menu;
