import React from "react";

import Grid from "@mui/material/Grid";

import H from "../../../../components/typography/h";

import GettingStarted from "./getting_started";
import TopArticles from "./top_articles";

import { IPanel } from "../tab_panel";

import { useStyles } from "./useStyles";

interface Props {
  panel: IPanel;
}

const Topic = (props: Props) => {
  const panel = props.panel;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item md={6}>
          <H fontSize="26px" color="#484848" fontWeight="600">
            Hướng dẫn khi mới bắt đầu
          </H>
        </Grid>
        <Grid item md={6} sx={{ textAlign: "right" }}>
          <a href="#" className={classes.link}>
            {"Duyệt tìm tất cả các chủ đề >"}
          </a>
        </Grid>
      </Grid>
      <GettingStarted cards={panel.cards} />
      <H fontSize="26px" color="#484848" fontWeight="600" lineHeight="20px">
        Bài viết hàng đầu
      </H>
      <TopArticles articles={panel.articles} />
    </React.Fragment>
  );
};

export default Topic;
