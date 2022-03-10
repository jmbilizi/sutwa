import React from "react";
import Jambotron from "../../Components/Jambotron";
import { Tab, Box, makeStyles, Tabs as Tablist } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";

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

  const classes = useStyles();

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
    setValue(newValue);
  };

  const classes = useStyles();

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
      {tabContext.tabPanels.map((tabPanel) => (
        <TabPanel value={tabPanel.value} className={panelClassName}>
          {tabPanel.component}
        </TabPanel>
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
