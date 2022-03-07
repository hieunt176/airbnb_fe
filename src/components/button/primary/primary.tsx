import React from "react";

import { Button } from "@mui/material";
import { useStyles } from "./useStyles";
import { ButtonStyle } from "../../../@types/ButtonStyle";

const PrimaryButton = (props: ButtonStyle) => {
  const classes = useStyles(props);

  return (
    <button className={classes.primaryButton}>
      <span className={classes.primarySpan}>{props.children}</span>
    </button>
  );
};

export default PrimaryButton;
