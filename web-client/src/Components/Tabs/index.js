import React from "react";
import {
  Tab,
  Box,
  Tabs as Tablist,
  Divider,
  MenuList,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { TabContext, TabPanel } from "@mui/lab";
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  AddBoxOutlined as AddBoxOutlinedIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import Jambotron from "../../Components/Jambotron";
import { SmallMenu } from "../Menu/smallMenu.js";

const useStyles = makeStyles((theme) => ({
  customTabStyle: {
    textTransform: "none",
    "&.Mui-selected": {
      fontWeight: "900",
    },
    marginBlock: "3px",
    "&:hover": {
      backgroundColor: "#d5d5d5",
      borderRadius: "5px",
    },
  },
  MoreTabStyle: {
    textTransform: "none",
    "&.Mui-selected": {
      fontWeight: "900",
    },
    marginBlock: "3px",
    "&:hover": {
      backgroundColor: "#d5d5d5",
      borderRadius: "5px",
    },
  },
  hover: {
    "&:hover": {
      backgroundColor: "#E8E8E8",
      borderRadius: "5px",
    },
  },
}));

export const Tabs = ({
  tabContext,
  inlineBstStyle,
  panelClassName,
  ...rest
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <TabContext value={value}>
      <Jambotron inlineBstStyle={inlineBstStyle}>
        <Box>
          <Tablist
            {...rest}
            value={value}
            onChange={handleChange}
            visibleScrollbar
            // scrollButtons={false}
            // allowScrollButtonsMobile
            indicatorColor={"primary"}
            aria-label="scrollable force tabs example"
          >
            {tabContext.tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                value={tab.value}
                className={classes.customTabStyle}
              />
            ))}
          </Tablist>
        </Box>
      </Jambotron>
      <Jambotron inlineBstStyle={`container-xl`}>
        {tabContext.tabPanels.map((tabpanel, index) => (
          <TabPanel
            key={index}
            value={tabpanel.value}
            className={panelClassName}
          >
            {tabpanel.component}
          </TabPanel>
        ))}
      </Jambotron>
    </TabContext>
  );
};

export const TabsWithLink = ({
  tabContext,
  tabDefaultValue,
  panelClassName,
  more,
  ...rest
}) => {
  const [value, setValue] = React.useState(tabDefaultValue);

  //Menu related staff
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [menuContent, setMenuContent] = React.useState(null);

  const handleClick = (event, menuCont) => {
    event.preventDefault();
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setMenuContent(menuCont);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const classes = useStyles();

  const router = useRouter();

  return (
    <React.Fragment>
      <TabContext value={value}>
        <Jambotron
          style={{ backgroundColor: "white" }}
          inlineBstStyle="container-fluid  shadow-sm bottom px-1"
        >
          <Jambotron
            inlineBstStyle={`container-xl mt-0 position-relative px-lg-4`}
          >
            <hr className="mt-lg-0 mb-0"></hr>
            <Box>
              <Tablist
                {...rest}
                value={value}
                onChange={handleChange}
                // visibleScrollbar
                // scrollButtons={false}
                // allowScrollButtonsMobile
                indicatorColor={"primary"}
                aria-label="scrollable force tabs example"
              >
                {tabContext.tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    component="a"
                    label={tab.label}
                    value={tab.value}
                    href={tab.path}
                    className={classes.customTabStyle}
                    onClick={(event) => {
                      event.preventDefault();
                      router.push(tab.path, undefined, { shallow: true });
                    }}
                  />
                ))}
                <Tab
                  onClick={(event) => {
                    event.preventDefault();
                    return handleClick(
                      event,
                      <MenuList dense className="p-2">
                        {[
                          {
                            name: "Post",
                            icon: <AddBoxOutlinedIcon />,
                            href: "/new-post",
                          },
                          {
                            name: "Team",
                            icon: <AddBoxOutlinedIcon />,
                            href: "/new-team",
                          },
                          {
                            name: "Club",
                            icon: <AddBoxOutlinedIcon />,
                            href: "/new-club",
                          },
                          {
                            name: "Competition",
                            icon: <AddBoxOutlinedIcon />,
                            href: "/new-competition",
                          },
                          {
                            name: "Tournament",
                            icon: <AddBoxOutlinedIcon />,
                            href: "/new-tournament",
                          },
                          {
                            name: "Facility",
                            icon: <AddBoxOutlinedIcon />,
                            href: "/new-facility",
                          },
                        ].map((object, Index) => (
                          <Link
                            key={Index}
                            style={{
                              textDecoration: "inherit",
                              color: "inherit",
                            }}
                            href={object.href}
                          >
                            <ListItem
                              className={`${classes.hover}`}
                              style={{ borderRadius: "5px" }}
                            >
                              <ListItemIcon>{object.icon}</ListItemIcon>
                              <ListItemText
                                primary={`Create a ${object.name}`}
                              />
                            </ListItem>
                          </Link>
                        ))}
                      </MenuList>
                    );
                  }}
                  label={
                    <span>
                      More
                      <ArrowDropDownIcon />
                    </span>
                  }
                  className={classes.MoreTabStyle}
                />
                {more ? more : null}
              </Tablist>
            </Box>
          </Jambotron>
        </Jambotron>
        <Jambotron inlineBstStyle={`container-xl`}>
          {tabContext.tabPanels.map((tabPanel, index) => (
            <TabPanel
              key={index}
              value={tabPanel.value}
              className={`mt-3 ${panelClassName} mx-1 mx-lg-4 border border-silver`}
              style={{ borderRadius: "5px" }}
            >
              {tabPanel.component}
            </TabPanel>
          ))}
        </Jambotron>
      </TabContext>
      {open && (
        <SmallMenu
          anchorEl={anchorEl}
          menuContent={menuContent}
          clickAwayHandler={handleClose}
          isOpen={open}
          boxStyle={{ my: 1 }}
        />
      )}
    </React.Fragment>
  );
};
