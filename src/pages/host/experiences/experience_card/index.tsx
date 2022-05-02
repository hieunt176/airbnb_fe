import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import H from "../../../../components/typography/h";

import { useStyles } from "./useStyles";

import { BaseCard } from "../../../../@types/styles/baseCard";

export interface IExperieceCard {
  card: BaseCard;
  link: string;
  backgroundColor: string;
  height: string;
}

export interface Props {
  experience: IExperieceCard;
}

const ExperienceCard = (props: Props) => {
  const classes = useStyles();
  const { card, link, backgroundColor, height } = props.experience;
  const { img, title, content } = card;
  return (
    <Card
      sx={{
        backgroundColor: backgroundColor,
        height: height,
      }}
      className={classes.card}
    >
      <CardMedia component="img" image={img} alt="green iguana" />
      <CardContent>
        <H fontSize="24px" color="#484848" fontWeight="700">
          {title}
        </H>
        <br />
        <H fontSize="16px" color="#484848" fontWeight="400">
          {content}
        </H>
      </CardContent>
      <CardActions>
        {link === "" ? (
          ""
        ) : (
          <a href="#" className={classes.action}>
            {link}
          </a>
        )}
      </CardActions>
    </Card>
  );
};

export default ExperienceCard;
