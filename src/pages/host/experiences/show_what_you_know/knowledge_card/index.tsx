import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import H from "../../../../../components/typography/h";

import { useStyles } from "./useStyles";
import { BaseCard } from "../../../../../@types/styles/baseCard";

export interface Props {
  knowledge: BaseCard;
}

const KnowledgeCard = (props: Props) => {
  const classes = useStyles();
  const { img, title, content } = props.knowledge;
  return (
    <Card className={classes.card}>
      <CardMedia component="img" image={img} alt="green iguana" />
      <CardContent>
        <H fontSize="24px" color="#484848" lineHeight="2.25em">
          {title}
        </H>
        <H fontSize="16px" color="#484848" fontWeight="400">
          {content}
        </H>
      </CardContent>
    </Card>
  );
};

export default KnowledgeCard;
