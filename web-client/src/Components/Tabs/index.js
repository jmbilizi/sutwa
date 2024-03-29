import React from "react";
import dynamic from "next/dynamic";
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
import { SmallMenu } from "../Menu/smallMenu.js";
const Jambotron = dynamic(() => import("../../Components/Jambotron"), {
  ssr: false,
});

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
    paddingBlock: "14px",
    marginBlock: "3px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
    },
  },
  MoreTabStyleTabInDropDown: {
    textTransform: "none",
    "&:hover": {
      color: "unset !important",
    },
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
  const [visibleTabsData, setVisibleTabsData] = React.useState(
    tabContext.tabs.filter((_obj, i) => i <= 5)
  );
  const [dropdownTabsData, setDropdownTabsData] = React.useState(
    tabContext.tabs.filter((_obj, i) => i > 5)
  );
  const [isDropDownTab, setIsDropDownTab] = React.useState(false);
  //Menu related staff
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
      setVisibleTabsData(tabContext.tabs.filter((_obj, i) => i <= 2));
      setDropdownTabsData(tabContext.tabs.filter((_obj, i) => i > 2));
      setIsDropDownTab(
        Boolean(
          tabContext.tabs
            .filter((_obj, i) => i > 2)
            .find((tab) => tab.value === value)
        )
      );
    } else if (screenWidthSize <= md) {
      setVisibleTabsData(tabContext.tabs.filter((_obj, i) => i <= 4));
      setDropdownTabsData(tabContext.tabs.filter((_obj, i) => i > 4));
      setIsDropDownTab(
        Boolean(
          tabContext.tabs
            .filter((_obj, i) => i > 4)
            .find((tab) => tab.value === value)
        )
      );
    } else {
      setVisibleTabsData(tabContext.tabs.filter((_obj, i) => i <= 5));
      setDropdownTabsData(tabContext.tabs.filter((_obj, i) => i > 5));
      setIsDropDownTab(
        Boolean(
          tabContext.tabs
            .filter((_obj, i) => i > 5)
            .find((tab) => tab.value === value)
        )
      );
    }

    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, [tabContext, value, screenWidthSize]);

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
                    onClick={(event) => {
                      event.preventDefault();
                      router.push(tab.path, undefined, { shallow: true });
                    }}
                    label={
                      <Link href={tab.path} passHref>
                        <Typography>{tab.label}</Typography>
                      </Link>
                    }
                    value={tab.value}
                    className={classes.customTabStyle}
                  />
                ))}
                {isDropDownTab ? (
                  <Tab
                    label={
                      <Typography>
                        More
                        <ArrowDropDownIcon sx={{ marginTop: 0 }} />
                      </Typography>
                    }
                    value={value}
                    className={`${classes.MoreTabStyleTabInDropDown} ps-3 pe-2`}
                    onClick={(event) => {
                      event.preventDefault();
                      return handleClick(event);
                    }}
                  />
                ) : (
                  <Typography
                    onClick={(event) => {
                      event.preventDefault();
                      return handleClick(event);
                    }}
                    className={`${classes.MoreTabStyle} ps-3 pe-2`}
                  >
                    <Typography>
                      More
                      <ArrowDropDownIcon sx={{ marginTop: 0 }} />
                    </Typography>
                  </Typography>
                )}
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
                <Link key={index} href={tab.path} passHref>
                  <ListItem
                    value={tab.value}
                    className={classes.MoreTabsListStyle}
                    onClick={(ev) => {
                      ev.preventDefault();
                      router.push(tab.path, undefined, {
                        shallow: true,
                      });
                      setValue(tab.value);
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
                </Link>
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
