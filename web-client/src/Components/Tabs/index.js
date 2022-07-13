import React from "react";
import { Tab, Box, Tabs as Tablist } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { TabContext, TabPanel } from "@mui/lab";
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import Jambotron from "../../Components/Jambotron";

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

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const classes = useStyles();

  const router = useRouter();

  return (
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
  );
};
