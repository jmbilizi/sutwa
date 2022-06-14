import * as React from "react";
import { Menu as MaterialUIMenu } from "@mui/material";
import PropTypes from "prop-types";

const Menu = ({ children, ...rest }) => {
  return (
    <MaterialUIMenu
      {...rest}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      PaperProps={{
        style: {
          marginTop: 60,
          marginRight: 0,
          width: 350,
          //height: 475,
          //maxWidth: 350,
          maxHeight: "80vh",
          cursor: "pointer",
        },
      }}
    >
      {children}
    </MaterialUIMenu>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
};

export default Menu;
