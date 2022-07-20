import React from "react";
import { Menu } from "./index";

export const SmallMenu = ({
  anchorEl,
  isOpen,
  clickAwayHandler,
  menuContent,
  boxStyle,
}) => {
  return (
    <Menu
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorEl={anchorEl}
      isOpen={isOpen}
      clickAwayHandler={clickAwayHandler}
      placement="bottom-end"
      disablePortal={false}
      boxStyle={{ ...boxStyle }}
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
