import React from "react";

import Grid from "@mui/material/Grid";

import H from "../../../../../components/typography/h";

import { useStyles } from "./useStyles";

import { Activity } from "../";

export interface Props {
  activity: Activity;
  index: number;
}

const ActivityCard = (props: Props) => {
  const classes = useStyles();
  const { img, title, content } = props.activity;
  const index = props.index;

  return (
    <Grid
      className={classes.card}
      container
      direction={index % 2 === 0 ? "row-reverse" : "row"}
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item md={5}>
        <img src={img} alt="muscache" width="100%" />
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={6}>
        <H fontSize="46px">{title}</H>
        <br />
        <div className={classes.content}>
          <H fontSize="18px" fontWeight="500">
            {content}
          </H>
        </div>
      </Grid>
    </Grid>
  );
};

export default ActivityCard;
