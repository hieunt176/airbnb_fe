import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useStyles } from "./useStyles";
import H from "../typography/h";
import { CardTripStyle } from "../../@types/styles/CardTripStyle";

const CardTrip = (props: CardTripStyle) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <CardMedia  component="img" height="140" image={props.image} alt="green iguana" />
      <CardContent>
        <H variant="h5" fontWeight="500 !important" padding="0 0 5px 0" flexGrow={1}>
          {props.children}
        </H>
        <Typography variant="body2" className={classes.distance}>
          {props.distance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTrip;
