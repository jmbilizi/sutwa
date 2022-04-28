import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import { Tabs } from "../../../../Components/Tabs";

const tabContext = {
  tabs: [
    {
      label: "Group Stage",
      value: "1",
    },
    {
      label: "Play-off",
      value: "2",
    },
    {
      label: "Stats",
      value: "3",
    },
    {
      label: "Players",
      value: "4",
    },
  ],
  tabPanels: [
    {
      value: "1",
      component: <h4>Group Stage Info</h4>,
    },
    {
      value: "2",
      component: <h4>Play off content</h4>,
    },
    {
      value: "3",
      component: <h4>Stats content</h4>,
    },
    {
      value: "4",
      component: <h4>Season plays</h4>,
    },
  ],
};

const Standings = () => {
  const [season, setSeason] = React.useState(10);

  const handleChange = (event) => {
    setSeason(event.target.value);
  };

  return (
    <div className="container-fluid shadow-sm border border-white">
      <div className="row p-3">
        <div className="col-12">
          Season{" "}
          <Select
            value={season}
            onChange={handleChange}
            variant="standard"
            disableUnderline
            className="fw-bold text-primary"
          >
            <MenuItem value={10}>2022</MenuItem>
            <MenuItem value={20}>2019</MenuItem>
            <MenuItem value={30}>2017</MenuItem>
          </Select>
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Tabs
          inlineBstStyle="border-bottom border-light"
          tabContext={tabContext}
          variant="fullWidth"
          panelClassName="px-0"
        />
      </div>
    </div>
  );
};

export default Standings;
