import React from "react";

import GradientTextButton from "../../../components/button/gradient/gradientText";
import H from "../../../components/typography/h";
import { useStyles } from "./useStyles";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.background}>
        <div className={classes.title}>
          <H variant="h1" fontSize="38px">
            Hãy để trí tò mò của bạn dẫn lối{" "}
          </H>
        </div>
        <GradientTextButton>Tìm kiếm linh hoạt</GradientTextButton>
      </div>
    </div>
  );
};

export default Banner;
