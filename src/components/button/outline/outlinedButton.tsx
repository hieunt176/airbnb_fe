import React from "react";

import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";
import { ButtonStyle } from "../../../@types/styles/buttonStyle";

export const OutlinedButton = (props: ButtonStyle) => {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.rootButton}>
      {props.children}
    </Button>
  );
};

export default OutlinedButton;
