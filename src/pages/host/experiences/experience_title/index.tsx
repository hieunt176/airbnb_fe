import React from "react";

import Grid from "@mui/material/Grid";

import H from "../../../../components/typography/h";

import { useStyles } from "./useStyles";

import { BaseCard } from "../../../../@types/styles/baseCard";

export interface Props {
  experienceTitle: BaseCard;
}

const ExperienceTitle = (props: Props) => {
  const classes = useStyles();

  const { title, content } = props.experienceTitle;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.gridContainer}
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item md={4}>
          <H color="#484848" fontSize="32px" fontWeight="700">
            {title}
          </H>
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={6}>
          <H color="#484848" fontSize="18px" fontWeight="400">
            {content}
          </H>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExperienceTitle;
