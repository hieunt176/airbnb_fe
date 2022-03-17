import React from "react";
import { OutlinedButton } from "../../../components/button/outline/outlinedButton";

import H from "../../../components/typography/h";
import { useStyles } from "./useStyles";

const Carousel = () => {
  const classes = useStyles();

  return (
    <div className={classes.carousel}>
      <div className={classes.content}>
        <div className={classes.title}>
          <H variant="h1" fontSize="38px">
            Giúp đỡ chỗ ở cho 100.000 người tị nạn đang chạy trốn khỏi Ukraine
          </H>
        </div>
        <OutlinedButton />
      </div>
    </div>
  );
};

export default Carousel;
