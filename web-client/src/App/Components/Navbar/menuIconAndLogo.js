import React from "react";
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

export const MenuIconAndLogo = ({ classes, handleDrawerToggle }) => (
  <div className="left-side-nav-content px-0 nav-items">
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </IconButton>
    <IconButton
      style={{
        paddingLeft: "14px",
        paddingRight: "14px",
        fontSize: "33px",
        color: "white",
        fontWeight: "900",
      }}
      className={`${classes.sutwaLogo} py-0`}
      href="/"
    >
      S
    </IconButton>
  </div>
);
