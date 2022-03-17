import React from "react";

import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";

export const OutlinedButton = () => {
  const classes = useStyles()

  return <Button variant="outlined" className={classes.rootButton}>Tìm hiểu thêm</Button>;
};

export default OutlinedButton;
