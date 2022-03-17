import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useStyles } from "./useStyles";
import H from "../../typography/h";
import { IDistanceCard } from "../../../@types/styles/card";

const DistanceCard = (props: IDistanceCard) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <CardMedia component="img" height="140" image={props.image} alt="green iguana" />
      <CardContent>
        <div className={classes.cardTitle}> {props.children}</div>
        <Typography variant="body2" className={classes.distance}>
          {props.distance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DistanceCard;
