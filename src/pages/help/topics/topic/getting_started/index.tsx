import React from "react";

import { Grid } from "@mui/material";

import H from "../../../../../components/typography/h";

import { BaseCard } from "../../../../../@types/styles/baseCard";

import { useStyles } from "./useStyles";

export interface Props {
  cards: BaseCard[];
}

const GettingStarted = (props: Props) => {
  const classes = useStyles();

  const cards = props.cards;

  const render = (cards: BaseCard[]) => {
    return cards.map((card: BaseCard, key: number) => {
      return (
        <Grid item md={3} key={key}>
          <img src={card.img} alt="" className={classes.img} />
          <H fontSize="18px" fontWeight="600" color="rgb(34,34,34">
            {card.title}
          </H>
        </Grid>
      );
    });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={classes.root}
    >
      {render(cards)}
    </Grid>
  );
};

export default GettingStarted;
