import React from "react";

import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";

export const LearnMore = () => {
  const classes = useStyles()

  return <Button variant="outlined" className={classes.rootButton}>Learn more</Button>;
};

export default LearnMore;
