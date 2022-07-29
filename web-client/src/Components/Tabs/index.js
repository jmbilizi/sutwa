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
  Check as CheckIcon,
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
      backgroundColor: "#f1f1f1",
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
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
    },
  },
  MoreTabsListStyle: {
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
    },
    textDecoration: "inherit",
    color: "inherit",
  },
  hover: {
    "&:hover": {
      backgroundColor: "#f1f1f1",
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
          inlineBstStyle="container-fluid shadow-sm bottom px-1"
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
                {tabContext.tabs
                  .filter((o, i) => i <= 2)
                  .map((tab, index) => (
                    <Tab
                      sx={{ display: { xs: "block", md: "none" }, padding: 2 }}
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

                {tabContext.tabs
                  .filter((o, i) => i <= 4)
                  .map((tab, index) => (
                    <Tab
                      sx={{
                        display: { xs: "none", md: "block", lg: "none" },
                        padding: 2,
                      }}
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

                {tabContext.tabs
                  .filter((o, i) => i <= 5)
                  .map((tab, index) => (
                    <Tab
                      sx={{ display: { xs: "none", lg: "block" }, padding: 2 }}
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
                      <MenuList dense className="py-2 px-1">
                        {tabContext.tabs
                          .filter((o, i) => i > 2)
                          .map((tab, index) => (
                            <ListItem
                              sx={{
                                display: { xs: "block", md: "none" },
                              }}
                              key={index}
                              component="a"
                              value={tab.value}
                              href={tab.path}
                              className={classes.MoreTabsListStyle}
                              onClick={(ev) => {
                                ev.preventDefault();
                                setValue(tab.value);
                                router.push(tab.path, undefined, {
                                  shallow: true,
                                });
                                handleClose();
                              }}
                            >
                              <small>{tab.label}</small>
                              {tab.value === value ? (
                                <CheckIcon
                                  color="primary"
                                  fontSize="small"
                                  className="float-end"
                                />
                              ) : null}
                            </ListItem>
                          ))}

                        {tabContext.tabs
                          .filter((o, i) => i > 4)
                          .map((tab, index) => (
                            <ListItem
                              sx={{
                                display: {
                                  xs: "none",
                                  md: "block",
                                  lg: "none",
                                },
                              }}
                              key={index}
                              component="a"
                              value={tab.value}
                              href={tab.path}
                              className={classes.MoreTabsListStyle}
                              onClick={(ev) => {
                                ev.preventDefault();
                                setValue(tab.value);
                                router.push(tab.path, undefined, {
                                  shallow: true,
                                });
                                handleClose();
                              }}
                            >
                              <small>{tab.label}</small>
                              {tab.value === value ? (
                                <CheckIcon
                                  color="primary"
                                  fontSize="small"
                                  className="float-end"
                                />
                              ) : null}
                            </ListItem>
                          ))}

                        {tabContext.tabs
                          .filter((o, i) => i > 5)
                          .map((tab, index) => (
                            <ListItem
                              sx={{
                                display: { xs: "none", lg: "block" },
                              }}
                              key={index}
                              component="a"
                              value={tab.value}
                              href={tab.path}
                              className={classes.MoreTabsListStyle}
                              onClick={(ev) => {
                                ev.preventDefault();
                                setValue(tab.value);
                                router.push(tab.path, undefined, {
                                  shallow: true,
                                });
                                handleClose();
                              }}
                            >
                              <small>{tab.label}</small>
                              {tab.value === value ? (
                                <CheckIcon
                                  color="primary"
                                  fontSize="small"
                                  className="float-end"
                                />
                              ) : null}
                            </ListItem>
                          ))}
                      </MenuList>
                    );
                  }}
                  value={false}
                  label={
                    <span>
                      More
                      <ArrowDropDownIcon />
                    </span>
                  }
                  component="a"
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
              className={`my-3 ${panelClassName} mx-1 mx-lg-4`}
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
