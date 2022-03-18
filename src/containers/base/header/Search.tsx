import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import SearchDetail from "./SearchDetail";

import { useStyles } from "./useStyles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Search() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Box>
        <Tabs
          className={classes.tab}
          value={value}
          onChange={handleChange}
          // indicatorColor="transparent"
          aria-label="basic tabs example"
        >
          <Tab label="Nơi ở" {...a11yProps(0)} className={classes.tab_item} />
          <Tab
            label="Trải nghiệm"
            {...a11yProps(1)}
            className={classes.tab_item}
          />
          <Link
            href="#"
            //  className={classes.link}
            className={classes.tab_item}
          >
            <Tab label="Trải nghiệm trực tuyến" {...a11yProps(2)} />
          </Link>
        </Tabs>
      </Box>
      <div className={classes.panel}>
        <TabPanel value={value} index={0}>
          <SearchDetail />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchDetail />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SearchDetail />
        </TabPanel>
      </div>
    </Box>
  );
}
