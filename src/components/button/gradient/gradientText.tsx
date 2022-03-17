import React from "react";

import { useStyles } from "./useStyles";

interface Props {
    children: React.ReactNode
}

const GradientTextButton = (props: Props) => {
  const classes = useStyles();

  return (
    <button className={classes.primaryButton}>
      <span className={classes.primarySpan}>{props.children}</span>
    </button>
  );
};

export default GradientTextButton;