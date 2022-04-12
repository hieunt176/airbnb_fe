import React from "react";

import Grid from "@mui/material/Grid";

import { CarouselStyle } from "../../../../@types/styles/carouselStyle";
import { useStyles } from "./useStyles";

const Carousel = (props: CarouselStyle) => {
  const { display, title, content, btnText, video } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction={display === "0" ? "row-reverse" : "row"}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12} md={6} className={classes.containVideo}>
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
          className={classes.containTitle}
        >
          <span className={classes.title}>{title}</span>
          <span className={classes.content}>{content}</span>
          <a className={classes.link}>{btnText}</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Carousel;
