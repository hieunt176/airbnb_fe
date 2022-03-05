import React from "react";
import { LearnMore } from "../../components/button/learn-more/learnMore";

import H from "../../components/typography/h"
import { useStyles } from "./useStyles";


const Carousel = () => {
  const classes = useStyles();

  return (
    <div className={classes.carousel}>
      <div className={classes.content}>
       <H variant="h4" color="white" textAlign="center" fontWeight="500 !important" fontSize="38px !important" padding="0 0 25px 0 !important">Help house 100,000 refugees fleeing Viet Nam</H>
       <LearnMore/>
      </div>
    </div>
  );
};

export default Carousel;
