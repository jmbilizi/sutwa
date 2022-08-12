import React from "react";
import {
  Tab,
  Box,
  Tabs as Tablist,
  Divider,
  MenuList,
  ListItem,
  ListItemText,
  Typography,
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
    marginBlock: "3px",
    "&:hover": {
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
      textDecoration: "none",
      color: "unset !important",
      fontWeight: "normal",
      "&.Mui-selected": {
        backgroundColor: "transparent",
      },
    },
    maxWidth: 70,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 0,
      paddingRight: 0,
      minWidth: 63,
    },
  },
  MoreTabStyle: {
    paddingBlock: "12px",
    marginBlock: "3px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
    },
  },
  MoreTabStyleTabInDropDown: {
    borderBottom: "3px solid #556cd6",
    paddingTop: "15px",
    color: "#556cd6",
    cursor: "pointer",
  },

  MoreTabsListStyle: {
    "&:hover": {
      backgroundColor: "#f1f1f1",
      color: "inherit",
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
  const [screenWidthSize, setScreenWidthSize] = React.useState(undefined);
  const [visibleTabsData, setVisibleTabsData] = React.useState([]);
  const [dropdownTabsData, setDropdownTabsData] = React.useState([]);
  const [isDropDownTab, setIsDropDownTab] = React.useState(false);

  React.useEffect(() => {
    const getScreenSize = () => {
      setScreenWidthSize(window.innerWidth);
    };

    getScreenSize();

    window.addEventListener("resize", getScreenSize);

    //handle Tabs data
    const sm = 576;
    const md = 768;

    if (screenWidthSize <= sm) {
      setVisibleTabsData(tabContext.tabs.filter((o, i) => i <= 2));
      setDropdownTabsData(tabContext.tabs.filter((o, i) => i > 2));
      setIsDropDownTab(
        Boolean(
          tabContext.tabs
            .filter((o, i) => i > 2)
            .find((tab) => tab.value === value)
        )
      );
    } else if (screenWidthSize <= md) {
      setVisibleTabsData(tabContext.tabs.filter((o, i) => i <= 4));
      setDropdownTabsData(tabContext.tabs.filter((o, i) => i > 4));
      setIsDropDownTab(
        Boolean(
          tabContext.tabs
            .filter((o, i) => i > 4)
            .find((tab) => tab.value === value)
        )
      );
    } else {
      setVisibleTabsData(tabContext.tabs.filter((o, i) => i <= 5));
      setDropdownTabsData(tabContext.tabs.filter((o, i) => i > 5));
      setIsDropDownTab(
        Boolean(
          tabContext.tabs
            .filter((o, i) => i > 5)
            .find((tab) => tab.value === value)
        )
      );
    }

    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, [screenWidthSize, tabContext.tabs, value]);

  //Menu related staff
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(anchorEl ? null : event.currentTarget);
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
            <Divider />
            <Box>
              <Tablist
                {...rest}
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { height: 3 } }}
                textColor="primary"
                indicatorColor="primary"
                aria-label="scrollable force tabs example"
              >
                {visibleTabsData.map((tab, index) => (
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
                <span
                  onClick={(event) => {
                    event.preventDefault();
                    return handleClick(event);
                  }}
                  className={
                    isDropDownTab
                      ? `${classes.MoreTabStyleTabInDropDown} ps-3 pe-2`
                      : `${classes.MoreTabStyle} ps-3 pe-2`
                  }
                >
                  <small>
                    More
                    <ArrowDropDownIcon sx={{ marginTop: 0 }} />
                  </small>
                </span>
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
          menuContent={
            <MenuList dense className="py-2">
              {dropdownTabsData.map((tab, index) => (
                <ListItem
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
                  <ListItemText>{tab.label}</ListItemText>
                  {tab.value === value ? (
                    <Typography variant="body2" color="primary">
                      <CheckIcon fontSize="small" />
                    </Typography>
                  ) : null}
                </ListItem>
              ))}
            </MenuList>
          }
          clickAwayHandler={handleClose}
          isOpen={open}
          boxStyle={{ my: 1 }}
        />
      )}
    </React.Fragment>
  );
};
