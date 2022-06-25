import React from "react";
import { Tab, Box, Tabs as Tablist } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { TabContext, TabPanel } from "@mui/lab";
import Jambotron from "../../Components/Jambotron";

const useStyles = makeStyles((theme) => ({
  customTabStyle: {
    textTransform: "none",
    "&.Mui-selected": {
      fontWeight: "900",
    },
    marginBlock: "3px",
    "&:hover": {
      backgroundColor: "#dddddd",
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
    setValue(newValue);
  };
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <TabContext value={value}>
      <Jambotron
        style={{ backgroundColor: "white" }}
        inlineBstStyle={inlineBstStyle}
      >
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
            {tabContext.tabs.map((tab) => (
              <Tab
                label={tab.label}
                value={tab.value}
                className={classes.customTabStyle}
              />
            ))}
          </Tablist>
        </Box>
      </Jambotron>
      {tabContext.tabPanels.map((tabpanel) => (
        <TabPanel value={tabpanel.value} className={panelClassName}>
          {tabpanel.component}
        </TabPanel>
      ))}
    </TabContext>
  );
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export const TabsWithLink = ({
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

  const classes = useStyles();

  return (
    <TabContext value={value}>
      <Jambotron
        style={{ backgroundColor: "white" }}
        inlineBstStyle={inlineBstStyle}
      >
        <Jambotron
          inlineBstStyle={`container-xl mt-0 position-relative px-lg-4`}
        >
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
              {tabContext.tabs.map((tab) => (
                <LinkTab
                  label={tab.label}
                  value={tab.value}
                  href={tab.url}
                  className={classes.customTabStyle}
                />
              ))}
            </Tablist>
          </Box>
        </Jambotron>
      </Jambotron>
      {tabContext.tabPanels.map((tabPanel) => (
        <Jambotron inlineBstStyle={`container-xl px-lg-4`}>
          <TabPanel value={tabPanel.value} className={`mt-3 ${panelClassName}`}>
            {tabPanel.component}
          </TabPanel>
        </Jambotron>
      ))}
    </TabContext>
  );
};

//   tabContext = {
//     tabs: [
//       {
//         label: "About",
//         value: "1",
//       },
//       {
//         label: "Teams",
//         value: "2",
//       },
//       {
//         label: "Competitions",
//         value: "3",
//       },
//     ],
//     tabPanels: [
//       {
//         value: "1",
//         component: <h4>This is about the User</h4>,
//       },
//       {
//         value: "2",
//         component: <h4>Teams the User is or was in</h4>,
//       },
//       {
//         value: "3",
//         component: <h4>Competitions the User is or was in</h4>,
//       },
//     ],
//   },
