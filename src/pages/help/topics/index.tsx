import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Login from "./login";
import TabPanel from "./tab_panel";
import { useStyles } from "./useStyles";

export interface TabPanelProps {
  children?: React.ReactNode;
  tab: string;
  index: number;
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Topics = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const tabs: TabPanelProps[] = [
    {
      children: "Khách",
      tab: "Khách",
      index: 0,
    },
    {
      children: "Chủ nhà",
      tab: "Chủ nhà",
      index: 1,
    },
    {
      children: "Người tổ chức trải nghiệm",
      tab: "Người tổ chức trải nghiệm",
      index: 2,
    },
    {
      children: "Quản trị viên chuyến công tác",
      tab: "Quản trị viên chuyến công tác",
      index: 3,
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderTab = (topics: TabPanelProps[]) => {
    return topics.map((topic: TabPanelProps) => {
      return (
        <Tab
          sx={{ textTransform: "capitalize" }}
          label={topic.tab}
          {...a11yProps(topic.index)}
          key={topic.index}
        />
      );
    });
  };

  const renderTabPanel = (tabs: TabPanelProps[]) => {
    return tabs.map((tab: TabPanelProps, key: number) => {
      return <TabPanel tabPanel={tab} value={value} key={key} />;
    });
  };

  return (
    <Box className={classes.root}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {renderTab(tabs)}
        </Tabs>
      </Box>
      <Login />
      {renderTabPanel(tabs)}
    </Box>
  );
};

export default Topics;
