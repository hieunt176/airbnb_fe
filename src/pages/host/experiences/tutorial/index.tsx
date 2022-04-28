import React from "react";

import Grid from "@mui/material/Grid";

import ExperienceTitle from "../experience_title";
import TutorialCard from "./tutorial_card";

import { BaseCard } from "../../../../@types/styles/baseCard";

export interface ITutorialCard {
  card: BaseCard;
  backgroundColor: string;
}

const Tutorial = () => {
  const experienceTitle: BaseCard = {
    img: "",
    title:
      "Tham gia cộng đồng đang ngày càng lớn mạnh của những người thích khám phá",
    content:
      "Người tổ chức là đầu bếp, nghệ sĩ, DJ và những chuyên gia khác trong lĩnh vực họ đang hoạt động. Những người đó khiến cho mọi người trên khắp thế giới cảm thấy được kết nối cũng như cấp quyền đi vào những địa điểm và tham dự các hoạt động độc đáo khó có thể tìm thấy ở bất kỳ nơi nào khác.",
  };

  const tutorials: ITutorialCard[] = [
    {
      card: {
        img: "https://a0.muscache.com/im/pictures/b7f0cbdb-2251-4513-b3cc-b93546606c7c.jpg",
        title: "DJ Jigüe",
        content:
          "DJ Jigüe luôn muốn chia sẻ niềm đam mê của anh dành cho âm nhạc Cuba có nguồn gốc từ châu Phi với mọi người. Anh giới thiệu cho khách về lịch sử âm nhạc phức hợp của Cuba và một số vị khách thậm chí đã đến xem anh chơi nhạc tại một buổi trình diễn ở Austin, Texas.",
      },
      backgroundColor: "#ECEFDE",
    },
    {
      card: {
        img: "https://a0.muscache.com/im/pictures/b7f0cbdb-2251-4513-b3cc-b93546606c7c.jpg",
        title: "DJ Jigüe",
        content:
          "DJ Jigüe luôn muốn chia sẻ niềm đam mê của anh dành cho âm nhạc Cuba có nguồn gốc từ châu Phi với mọi người. Anh giới thiệu cho khách về lịch sử âm nhạc phức hợp của Cuba và một số vị khách thậm chí đã đến xem anh chơi nhạc tại một buổi trình diễn ở Austin, Texas.",
      },
      backgroundColor: "#F5E3CE",
    },
  ];

  const renderTutorialCard = () => {
    return tutorials.map((tutorial: ITutorialCard, key: number) => {
      return (
        <Grid item key={key}>
          <TutorialCard tutorial={tutorial} />
        </Grid>
      );
    });
  };

  return (
    <React.Fragment>
      <ExperienceTitle experienceTitle={experienceTitle} />
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {renderTutorialCard()}
      </Grid>
    </React.Fragment>
  );
};

export default Tutorial;
