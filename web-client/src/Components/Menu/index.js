import * as React from "react";
import { Popper, Box } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import PropTypes from "prop-types";

export const Menu = ({
  children,
  isOpen,
  clickAwayHandler,
  boxStyle,
  ...rest
}) => {
  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <Popper {...rest} open={isOpen}>
        <Box
          sx={{
            boxShadow: 2,
            cursor: "pointer",
            bgcolor: "background.paper",
            borderRadius: "5px",
            ...boxStyle,
          }}
        >
          {children}
        </Box>
      </Popper>
    </ClickAwayListener>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
};
