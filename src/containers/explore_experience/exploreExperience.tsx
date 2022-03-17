import React from "react";

import { Grid } from "@mui/material";
import H from "../../components/typography/h";
import { useStyles } from "./useStyles";
import LightSilverButton from "../../components/button/light_silver/lightSilver";

const ExploreExperience = () => {
  const classes = useStyles();

  return (
    <div className={classes.experience}>
      <H variant="h2" color="#222222">
        Khám phá Trải nghiệm Airbnb
      </H>
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={`${classes.item} ${classes.left}`}>
              <div className={classes.title}>
                <H variant="h3" fontSize="41px" fontWeight="500">
                  Những điều nên trải nghiệm trong chuyến đi của bạn
                </H>
              </div>
              <LightSilverButton>Trải nghiệm</LightSilverButton>
              <div className={classes.overlay}></div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={`${classes.item} ${classes.right}`}>
              <div className={classes.title}>
                <H variant="h3" fontSize="41px" fontWeight="500">
                  Những điều nên trải nghiệm tại nhà
                </H>
              </div>
              <LightSilverButton>Trải nghiệm trực tuyến</LightSilverButton>
              <div className={classes.overlay}></div>
            </div>
          </Grid>
        </Grid>
        <div className={classes.question}>
          <div className={classes.textQuestion}>
            <H variant="h2" color="#fff" fontSize="74px" fontWeight="400 !important">
              Bạn có thắc mắc về việc đón tiếp khách?
            </H>
          </div>
          <div>
            <LightSilverButton>Hỏi ý kiến Chủ nhà siêu cấp</LightSilverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreExperience;
