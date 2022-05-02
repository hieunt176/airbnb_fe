import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import H from "../../../../../components/typography/h";

import { BaseCard } from "../../../../../@types/styles/baseCard";

import { useStyles } from "./useStyles";

export interface ITool {
  tool: BaseCard;
  border: string;
}

const ToolForYou = () => {
  const classes = useStyles();

  const tools: ITool[] = [
    {
      tool: {
        img: "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-alarm.e0a2b02fa7d1e956cd4135847fc0cda1.gif",
        title: "Nhiệm vụ",
        content: "",
      },
      border: "2px solid #FF5A5F",
    },
    {
      tool: {
        img: "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-calendar.ace59291b2904181320cb34108a24537.gif",
        title: "Lên lịch",
        content: "",
      },
      border: "2px solid #60B6B5",
    },
    {
      tool: {
        img: "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-money-saved.0d988c4ec128a1a11fdc5c499940dec8.gif",
        title: "Thanh toán",
        content: "",
      },
      border: "2px solid #FFB400",
    },
    {
      tool: {
        img: "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-graph.3f8bd411622845e624b9be5ba9631168.gif",
        title: "Thanh toán",
        content: "",
      },
      border: "2px solid #60B6B5",
    },
  ];

  const renderTools = () => {
    return tools.map((tool: ITool, key: number) => {
      return (
        <Grid item className={classes.card} key={key}>
          <Box className={classes.img} sx={{ border: tool.border }}>
            <img src={tool.tool.img} alt={tool.tool.img} />
          </Box>
          <br />
          <H fontSize="12px" color="#484848" fontWeight="500">
            {tool.tool.title}
          </H>
        </Grid>
      );
    });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {renderTools()}
    </Grid>
  );
};

export default ToolForYou;
