import React from "react";
import Grid from "@mui/material/Grid";

import H from "../../../../../components/typography/h";
import { BaseCard } from "../../../../../@types/styles/baseCard";
import { useStyles } from "./useStyles";

export interface Props {
  articles: BaseCard[];
}

const TopArticles = (props: Props) => {
  const classes = useStyles();

  const articles = props.articles;

  const renderArticles = (articles: BaseCard[]) => {
    return articles.map((article: BaseCard, key: number) => {
      return (
        <Grid item md={4} key={key}>
          <H
            fontSize="18px"
            fontWeight="600"
            color="rgb(34,34,34"
            lineHeight="28px"
          >
            {article.title}
          </H>
          <div className={classes.text}>
            <H fontSize="16px" fontWeight="400" color="#717171">
              {article.content}
            </H>
          </div>
          <br />
          <br />
          <hr />
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
      {renderArticles(articles)}
    </Grid>
  );
};

export default TopArticles;
