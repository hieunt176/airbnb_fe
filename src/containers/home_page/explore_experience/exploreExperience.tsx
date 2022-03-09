import React from "react";

import { Grid } from "@mui/material";
import H from "../../../components/typography/h";
import { useStyles } from "./useStyles";
import PrimaryButton from "../../../components/button/primary/primary";

const ExploreExperience = () => {
  const classes = useStyles();

  return (
    <div className={classes.experience}>
      <H variant="h4" color="#222222" paddingBottom="40px" fontWeight="600 !important">
        Khám phá Trải nghiệm Airbnb
      </H>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={`${classes.item} ${classes.left}`}>
            <H variant="h3" color="#fff" paddingBottom="40px" fontWeight="500 !important" width="80%" zIndex={10}>
              Những điều nên trải nghiệm trong chuyến đi của bạn
            </H>
            <PrimaryButton width="136px" height="48px" borderRadius="8px" background="linear-gradient(90deg, rgb(15 14 14) 100%, rgb(34 34 34) 135.12%) !important" fontSize="18px ">
              Trải nghiệm
            </PrimaryButton>
            <div className={classes.overlay}></div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={`${classes.item} ${classes.right}`}>
            <H variant="h3" color="#fff" paddingBottom="40px" fontWeight="500 !important" width="80%" zIndex={10}>
              Những điều nên trải nghiệm tại nhà
            </H>
            <PrimaryButton width="220px" height="48px" borderRadius="8px" background="linear-gradient(90deg, rgb(15 14 14) 100%, rgb(34 34 34) 135.12%) !important" fontSize="18px ">
              Trải nghiệm trực tuyến
            </PrimaryButton>
            <div className={classes.overlay}></div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.question}>
        <H variant="h2" color="#fff" paddingBottom="40px" fontWeight="500 !important" zIndex={10} width="50% !important">
          Bạn có thắc mắc về việc đón tiếp khách?
        </H>
        <PrimaryButton width="250px" height="48px" borderRadius="8px" background="linear-gradient(90deg, rgb(15 14 14) 100%, rgb(34 34 34) 135.12%) !important" fontSize="18px ">
          Hỏi ý kiến Chủ nhà siêu cấp
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ExploreExperience;
