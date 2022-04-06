import React from "react";

import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";
import { ButtonStyle } from "../../../@types/styles/buttonStyle";

const LightSilverButton = (props: ButtonStyle) => {
  const classes = useStyles(props);

  return (
    <Button variant="contained" className={classes.rootButton}>
      {props.children}
    </Button>
  );
};

export default LightSilverButton;
