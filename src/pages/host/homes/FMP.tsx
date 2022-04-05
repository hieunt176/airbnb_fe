import React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import H from "../../../components/typography/h";
import { useStyles } from "./useStyles";

const FDM = () => {
  const classes = useStyles();
  return (
    <div className={classes.fmp}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12} md={6} className={classes.fmp_right}>
          <video
            className={classes.video}
            autoPlay
            aria-label="Chelsea, Chủ nhà ở Philadelphia, mỉm cười khi mở cửa. Soraya, Chủ nhà ở Mumbai, mỉm cười khi mở cửa trước cùng một người khác ở bên cạnh. Mohamed, Chủ nhà ở Johannesburg, mỉm cười khi mở cửa. Maria, Chủ nhà ở Mexico City, gật đầu mỉm cười khi mang cây đi."
            crossOrigin="anonymous"
            playsInline
            preload="auto"
            muted
          >
            <source
              src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265"
              type="video/mp4; codecs=hevc"
            />
            <source
              src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
              type="video/mp4"
            />
          </video>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          flexDirection="column"
          className={classes.fmp_left}
        >
          <span className={classes.title}>
            Đón tiếp khách làm nên linh hồn của Airbnb
          </span>
          <a className={classes.fmp_link}>Thử đón tiếp khách</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default FDM;
