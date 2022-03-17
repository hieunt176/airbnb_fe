import React from "react";

import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";

interface Props {
  children: React.ReactNode
}

const LightSilverButton = (props: Props) => {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.rootButton}>
      {props.children}
    </Button>
  );
};

export default LightSilverButton;
