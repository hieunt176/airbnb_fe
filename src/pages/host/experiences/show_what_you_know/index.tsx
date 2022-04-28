import React from "react";

import Grid from "@mui/material/Grid";

import ExperienceTitle from "../experience_title";
import KnowledgeCard from "./knowledge_card";

import { useStyles } from "./useStyles";

import { BaseCard } from "../../../../@types/styles/baseCard";

const ShowWhatYouKnow = () => {
  const classes = useStyles();
  const experienceTitle: BaseCard = {
    img: "",
    title: "Thể hiện những điều bạn biết",
    content:
      "Mọi loại hình trải nghiệm như nấu ăn, làm đồ thủ công, chèo thuyền kayak và nhiều loại hình khác. Không có giới hạn nào cho những điều bạn có thể làm. Khám phá các danh mục nổi bật này.",
  };

  const knowledges: BaseCard[] = [
    {
      img: "https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg",
      title: "Văn hóa & Lịch sử",
      content:
        "Chia sẻ câu chuyện đằng sau các điểm đến nổi tiếng trong thành phố của bạn.",
    },
    {
      img: "https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg",
      title: "Văn hóa & Lịch sử",
      content:
        "Chia sẻ câu chuyện đằng sau các điểm đến nổi tiếng trong thành phố của bạn.",
    },
    {
      img: "https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg",
      title: "Văn hóa & Lịch sử",
      content:
        "Chia sẻ câu chuyện đằng sau các điểm đến nổi tiếng trong thành phố của bạn.",
    },
  ];

  const renderKnowledge = () => {
    return knowledges.map((knowledge: BaseCard, key: number) => {
      return (
        <Grid item key={key}>
          <KnowledgeCard knowledge={knowledge} />
        </Grid>
      );
    });
  };

  return (
    <React.Fragment>
      <ExperienceTitle experienceTitle={experienceTitle} />
      <Grid
        className={classes.knowledge}
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {renderKnowledge()}
      </Grid>
    </React.Fragment>
  );
};

export default ShowWhatYouKnow;
