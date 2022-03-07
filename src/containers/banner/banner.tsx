import React from "react";

import PrimaryButton from "../../components/button/primary/primary";
import H from "../../components/typography/h";
import { useStyles } from "./useStyles";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.background}>
        <H variant="h3" color="#ffff" fontWeight="400 !important" padding="0 0 20px 0">
          Hãy để trí tò mò của bạn dẫn lối
        </H>
        <PrimaryButton margin="0 0 45px 0" borderRadius="150px !important" background="linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%) !important" width="225px" height="60px" fontSize="18px !important" fontWeight="800">
          Tìm kiếm linh hoạt
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Banner;
