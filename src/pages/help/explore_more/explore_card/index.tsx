import React from "react";

import H from "../../../../components/typography/h";

import { BaseCard } from "../../../../@types/styles/baseCard";

import { useStyles } from "./useStyles";

export interface Props {
  exploreCard: BaseCard;
}

const ExploreCard = (props: Props) => {
  const classes = useStyles();

  const { img, title, content } = props.exploreCard;

  return (
    <div className={classes.card}>
      <img src={img} alt={img} width="100%" className={classes.img} />
      <div className={classes.text}>
        <H fontSize="16px" fontWeight="600">
          {title}
        </H>
        <H fontSize="14px" fontWeight="400">
          {content}
        </H>
      </div>
    </div>
  );
};

export default ExploreCard;
