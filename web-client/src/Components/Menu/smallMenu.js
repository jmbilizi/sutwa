import React from "react";
import { Menu } from "./index";

export const SmallMenu = ({
  anchorEl,
  isOpen,
  clickAwayHandler,
  menuContent,
  boxStyle,
  ...rest
}) => {
  return (
    <Menu
      {...rest}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorEl={anchorEl}
      isOpen={isOpen}
      clickAwayHandler={clickAwayHandler}
      disablePortal={false}
      boxStyle={{ width: "250px", ...boxStyle }}
      modifiers={[
        {
          name: "flip",
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: "document",
            padding: 8,
          },
        },
        {
          name: "preventOverflow",
          enabled: true,
          options: {
            altAxis: true,
            altBoundary: false,
            tether: true,
            rootBoundary: "document",
            padding: 8,
          },
        },
        {
          name: "arrow",
          enabled: true,
        },
      ]}
    >
      {menuContent}
    </Menu>
  );
};
