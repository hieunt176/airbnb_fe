import React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { FMPStyle } from "../../../../@types/styles/fmpStyle";
import { useStyles } from "./useStyles";

const FMP = (props: FMPStyle) => {
  const { display, title, content, btnText, video } = props;
  const classes = useStyles();
  return (
    <div className={classes.fmp}>
      <Grid
        container
        // direction="row-reverse"
        direction={display === "0" ? "row-reverse" : "row"}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12} md={6} className={classes.fmp_right}>
          <video
            className={classes.video}
            autoPlay
            aria-label={content}
            crossOrigin="anonymous"
            playsInline
            preload="auto"
            muted
          >
            <source src={video} type="video/mp4; codecs=hevc" />
            <source src={video} type="video/mp4" />
          </video>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          flexDirection="column"
          className={classes.fmp_left}
        >
          <span className={classes.title}>{title}</span>
          <span className={classes.content}>{content}</span>
          <a className={classes.fmp_link}>{btnText}</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default FMP;
