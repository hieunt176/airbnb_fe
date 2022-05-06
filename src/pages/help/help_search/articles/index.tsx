import React from "react";

import H from "../../../../components/typography/h";
import { useStyles } from "./useStyles";

export interface Props {
  articles: string[];
}

const Articles = (props: Props) => {
  const classes = useStyles();
  const articles = props.articles;

  const renderArticles = (articles: string[]) => {
    return articles.map((article: string, key: number) => {
      return (
        <a className={classes.article} href="#" key={key}>
          <img src="/images/article.svg" alt="" />
          <H
            fontSize="16px"
            color="#717171"
            fontWeight="400"
            padding="0 0 0 10px"
          >
            {article}
          </H>
        </a>
      );
    });
  };
  return (
    <div className={classes.articles}>
      <H fontSize="14px" color="#717171" fontWeight="600">
        Bài viết hàng đầu
      </H>
      {renderArticles(articles)}
    </div>
  );
};

export default Articles;
