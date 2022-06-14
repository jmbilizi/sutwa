import React from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { makeStyles, useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";

const useStyles = makeStyles((theme) => ({
  logo: {
    borderImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
    borderImageSlice: 1,
    backgroundImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
  },
}));

const MenuIconAndLogo = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className="left-side-nav-content nav-items">
      <Tooltip title="Menu">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className="mx-2"
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <IconButton
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          fontSize: "25px",
          color: "white",
          fontWeight: "800",
        }}
        size="small"
        className={classes.logo}
        href="/"
      >
        S
      </IconButton>
    </div>
  );
};

MenuIconAndLogo.propTypes = {
  handleDrawerToggle: PropTypes.func,
};

export default MenuIconAndLogo;
