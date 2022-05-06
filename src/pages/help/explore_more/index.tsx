import React from "react";

import Grid from "@mui/material/Grid";

import LightSilverButton from "../../../components/button/light_silver/lightSilver";
import H from "../../../components/typography/h";

import { BaseCard } from "../../../@types/styles/baseCard";

import ExploreCard from "./explore_card";
import { useStyles } from "./useStyles";

const ExploreMore = () => {
  const classes = useStyles();

  const exploreCards: BaseCard[] = [
    {
      img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt6a2935c750dda8a0/6179c6499778eb18575b3c0b/Airbnb-Policy-Web.png",
      title: "Chính sách cộng đồng của chúng tôi",
      content: "Cách chúng tôi xây dựng một nền tảng của sự tin tưởng.",
    },
    {
      img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png",
      title: "Mẹo và hướng dẫn về an toàn",
      content: "Tài nguyên giúp đảm bảo an toàn cho du khách.",
    },
  ];

  const renderExploreCard = (exploreCards: BaseCard[]) => {
    return exploreCards.map((exploreCard: BaseCard, key: number) => {
      return (
        <Grid item md={6} key={key}>
          <ExploreCard exploreCard={exploreCard} />
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      <H fontSize="32px" fontWeight="600">
        Khám phá thêm
      </H>
      <br />
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item md={8}>
          <Grid
            container
            justifyContent="center"
            alignItems="self-start"
            spacing={2}
          >
            {renderExploreCard(exploreCards)}
          </Grid>
        </Grid>
        <Grid item md={4}>
          <H fontSize="26px" fontWeight="600" lineHeight="40px">
            Bạn cần liên hệ?
          </H>
          <H fontSize="18px" fontWeight="400">
            Để bắt đầu, vui lòng trả lời một số câu hỏi để chúng tôi có thể kết
            nối bạn với bộ phận phù hợp.
          </H>
          <br />
          <LightSilverButton background="#F7F7F7 !important">
            <H fontSize="16px" color="#222222 !important" padding="24px 40px">
              Liên hệ với chúng tôi
            </H>
          </LightSilverButton>
          <br />
          <br />
          <H fontSize="18px" fontWeight="500">
            Bạn cũng có thể
            <a href="#" className={classes.link}>
              {" "}
              gửi phản hồi cho chúng tôi.
            </a>
          </H>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreMore;
