import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import H from "../../../../../components/typography/h";

import { useStyles } from "./useStyles";
import { ITutorialCard } from "../";

export interface Props {
  tutorial: ITutorialCard;
}

const TutorialCard = (props: Props) => {
  const classes = useStyles();
  const { card, backgroundColor } = props.tutorial;
  const { img, title, content } = card;
  return (
    <Card sx={{ backgroundColor: backgroundColor }} className={classes.card}>
      <CardMedia component="img" image={img} alt="green iguana" />
      <CardContent>
        <H fontSize="24px" color="#484848" lineHeight="2.25em">
          {title}
        </H>
        <H fontSize="16px" color="#484848" fontWeight="400">
          {content}
        </H>
      </CardContent>
      <CardActions>
        <a href="#" className={classes.action}>
          Tìm hiểu trải nghiệm
        </a>
      </CardActions>
    </Card>
  );
};

export default TutorialCard;
